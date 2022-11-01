import React, { ReactElement, FC, useEffect } from "react";
import JobSeekerProfileFlow from "./JobSeekerProfileFlow/JobSeekerProfileFlow";
import TabWrapper, { TabPanel } from "../components/TabWrapper/TabWrapper";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./JobSeekerBaseStyles.css";
import Vetting from "./Vetting/Vetting";
import Notification from "../components/Notification";
import DuplicationFailed from "./DuplicationFailed/DuplicationFailed";
import AllJs from "./AllJs/AllJs";
import Manage from "./Manage/Manage";
import IncompleteUploads from "./IncompleteUploads/IncompleteUploads";
import { useAppSelector, useAppDispatch } from "../services/StoreHooks";
import { initialAlertState } from "../modules/notificationState";

const useStyles = makeStyles(() => ({}));

const JobSeekerBase: FC<any> = (props): ReactElement => {
  const { id, contestId } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const notifyDataState = useAppSelector((state) => state.notificationAlert);
  const activeTabState = useAppSelector((state) => state.tabsState);
  const [activeTab, setActiveTab] = React.useState(0);
  const [dataMessage, setDataMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  useEffect(() => {
    if (activeTabState.activeTab !== activeTab) {
      setActiveTab(activeTabState.activeTab);
    }
  }, [activeTabState]);

  const jobSeekerTabs = [
    {
      title: "Add Profile",
      index: 0,
      component: (
        <JobSeekerProfileFlow
          setType={setType}
          setOpen={setOpen}
          setDataMessage={setDataMessage}
          contestId={"1032910127951769600"}
        />
      ),
    },
    {
      title: "Duplication Failed",
      index: 1,
      component: <DuplicationFailed contestId={"1032910127951769600"} />,
    },
    {
      title: "Incomplete Uploads ",
      index: 2,
      component: <IncompleteUploads id={"1032910127951769600"} />,
    },
    {
      title: "All JS",
      index: 3,
      component: <AllJs contestId={"1032910127951769600"} />,
    },
    {
      title: "Vetting",
      index: 4,
      component: <Vetting id={id} />,
    },
    {
      title: "Interview",
      index: 5,
      component: <div>Page Not Avaliable</div>,
    },
    {
      title: "Manage Profiles",
      index: 6,
      component: <Manage id={"1032910127951769600"} />,
    },
    {
      title: "Broadcast",
      index: 7,
      component: <div>Page Not Avaliable</div>,
    },
  ];

  const resetNotificationData = () => {
    dispatch({
      type: "SEND_ALERT",
      data: {
        enable: initialAlertState.enable,
        type: initialAlertState.type,
        message: initialAlertState.message,
        duration: initialAlertState.duration,
      },
    });
  };

  return (
    <Grid container p={2}>
      <Notification
        open={open}
        type={type}
        message={dataMessage}
        setOpen={setOpen}
      />
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
      {notifyDataState && (
        <Notification
          open={notifyDataState.enable}
          type={notifyDataState.type}
          message={notifyDataState.message}
          duration={notifyDataState.duration}
          setOpen={() => resetNotificationData()}
        />
      )}
    </Grid>
  );
};

export default JobSeekerBase;
