import React, { useEffect, useState } from "react";
import Graph from "../../components/AnalyticsGraph/Graph";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import TabWrapper, { TabPanel } from "../../components/TabWrapper/TabWrapper";

import { Box, Typography } from "@mui/material";
import { ERROR_KEY, JOB_SEEKER_COMLETE_PROFILE_TEXT } from "../../constants";
import { getJobSeekerProfile } from "../../services/FormDataService";
import { getJobSeekersDetails } from "../../services/JobSeekerService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import moment from "moment";

const JobSeekerCompleteProfile = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loader, setLoader] = React.useState(false);
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");

  const userDataState = useAppSelector((state) => state.currentUser);

  const callPrefillData = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );

      if (profileDataFetched?.data?.data) {
        setFullName(
          `${profileDataFetched?.data?.data.firstName} ${profileDataFetched?.data?.data.lastName}`
        );
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
    }
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekersDetails(
        "",
        props.profileDataId || userDataState.userData.profileId
      );

      const date =
        profileDataFetched?.data.data[0].matchedProfileLogsList[0].dateOfBirth;
      setDob(moment(date).utc().format("DD-MM-YYYY"));

      console.log(profileDataFetched?.data?.[0]);
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
    }
    setLoader(false);
  };

  useEffect(() => {
    callPrefillData();
  }, []);

  const jobSeekerTabs = [
    {
      title: "Profile Uploading",
      index: 0,
      component: <div>{""}</div>,
    },
    {
      title: `Full Name : ${fullName}`,
      index: 1,
      component: <div>{""}</div>,
    },
    {
      title: `DOB : ${dob} `,
      index: 2,
      component: <div>{""}</div>,
    },
    {
      title: "View Profile",
      index: 3,
      component: <div>{""}</div>,
    },
  ];
  return (
    <>
      <Box>
        <Box>
          <Typography
            variant="h5"
            color={"#22C55E"}
            textAlign={"center"}
            padding={"2vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.title}
          </Typography>
          <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.titleOne}
          </Typography>
          <Typography
            variant="body2"
            color={"#474747"}
            textAlign={"center"}
            padding={".5vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification1}
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#474747"}
            textAlign={"center"}
            padding={".5vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification2}
          </Typography>
          <div style={{ padding: "3vw 0 3vw 0" }}>
            <JobSeekerProfileCard contestId={props.contestId} />
          </div>
          <div>
            <TabWrapper
              tabIndex={activeTab}
              setTabIndex={setActiveTab}
              tabsList={jobSeekerTabs}
            />
            {jobSeekerTabs.map((tab) => (
              <TabPanel
                value={activeTab}
                index={tab.index}
                key={tab.index}
                disablePadding={true}
              >
                {tab.component}
              </TabPanel>
            ))}
          </div>
          <div style={{ padding: "2vw" }}>
            <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
              {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification3}
            </Typography>
            <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
              {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification4}
            </Typography>
          </div>
        </Box>

        <Box sx={{ padding: "0vw" }}>
          <Typography variant="h4" textAlign={"center"} padding={"3vw"}>
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.alyticsTitle}
          </Typography>
          <Graph />
        </Box>
      </Box>
    </>
  );
};

export default JobSeekerCompleteProfile;
