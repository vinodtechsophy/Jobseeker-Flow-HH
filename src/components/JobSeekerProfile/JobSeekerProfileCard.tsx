import React, { ReactElement, FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerProfileStatus from "./JobSeekerProfileStatus";
import {
  CONTEST_DETAILS,
  CONTEST_JOB_DESCRIPTION,
  CONTEST_ABOUT_EMPLOYER,
  CONTEST_PARTNERS,
  CONTEST_REWARDS,
  CONTEST_FAQ,
  CONTEST_TC,
} from "../../constants";

import {
  getContestDetails,
  getCompleteContestDetails,
} from "../../services/ContestService";
const JobSeekerProfileCard: FC<any> = (props): ReactElement => {
  const [userId, setUserId] = React.useState("");
  const [contestData, setContestData] = React.useState<any>({});
  const [tagImage, setTagImage] = React.useState<any>("actively-hiring");
  const [badgeImage, setBadgeImage] = React.useState<any>("most-wanted");
  const relations = [
    CONTEST_DETAILS,
    CONTEST_JOB_DESCRIPTION,
    CONTEST_ABOUT_EMPLOYER,
    CONTEST_PARTNERS,
    CONTEST_REWARDS,
    CONTEST_FAQ,
    CONTEST_TC,
  ];
  const searchContestDeatils = async (contestId: string) => {
    const response = await getCompleteContestDetails(contestId);
    if (response?.data?.success) {
      let rawData = response?.data?.data?.[0];
      let joinedFormData = {};
      const parentFormData = rawData.formData;
      parentFormData.id = rawData.id;

      relations.forEach((relation) => {
        const relationFormData = rawData[relation]?.[0]?.formData;
        if (relationFormData) {
          delete relationFormData.parentDataId;
          joinedFormData = Object.assign({
            ...joinedFormData,
            ...relationFormData,
          });
        }
      });

      const formattedData = { ...joinedFormData, ...parentFormData };
      setContestData(formattedData);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    searchContestDeatils(props.contestId);
  }, []);
  useEffect(() => {
    searchContestDeatils(props.contestId);
  }, [userId]);

  const navigate = useNavigate();

  const [contestDetails, setContestDetails] = useState<any>({
    id: props.contestId,
    employmentType: contestData?.cardTaglines || "fulltime",
    jobTitle: contestData?.position || "shsjsjs",
    bounty: `₹ ${contestData?.bounty}` || "30000",
    company: contestData?.company || "RBI",
    employerName: contestData?.employerName || "Freelancer",
    experience: `${contestData?.experience || 2} to ${
      contestData?.experience1 || 4
    } yrs`,
    tools: contestData?.technicalSkills || "java",
    noticePeriod: contestData?.requiredNoticePeriod || "5",
    locations: contestData?.country || "india",
    interviewDays: `${contestData?.dateTime} + ${contestData?.selectEndDate} `,
    positions: contestData?.position || "Back-end",
    numberOfPositions: contestData?.numberOfPositions || "0",
    ctc: `${contestData?.budgetCtcFrom} to ${contestData?.budgetCtcTo} ${contestData?.denomination}`,
    skills: contestData?.skills,
    degree: contestData?.qualifications,
    tags: contestData?.tags,
    tag: tagImage,
    rewards: {},
    badge: badgeImage,
    contestUrl: "",
    iconStatus: "",
    bonus: "2%",
    profilesMatched: " 24 profiles matched",
    quota: "50 profiles",
    buttonText: contestData?.buttonText || "Begin Hunt",
    buttonEnabled: true,
    iconsToShow: [
      "visit",
      "shares",
      "bookmarked",
      "not-interested",
      "questions",
      "post-your-query",
    ],
  });

  useEffect(() => {
    setContestDetails({
      id: props.contestId,
      employmentType: contestData?.cardTaglines || "h",
      jobTitle: contestData?.position || "shsjsjs",
      bounty: `₹ ${contestData?.bounty}` || "30000",
      company: contestData?.company || "RBI",
      employerName: contestData?.employerName,
      experience: `${contestData?.experienceFrom || 0} to ${
        contestData?.experienceTo || 0
      } yrs`,
      tools: contestData?.technicalSkills || "java",
      noticePeriod: contestData?.requiredNoticePeriod || "5",
      locations: contestData?.locations || "india",
      interviewDays: `${contestData?.dateTime} + ${contestData?.selectEndDate} `,
      positions: contestData?.position || "Back-end",
      numberOfPositions: contestData?.numberOfPositions || "0",
      ctc: `${contestData?.budgetCtcFrom} to ${contestData?.budgetCtcTo} ${contestData?.denomination}`,
      skills: contestData?.skills,
      degree: contestData?.qualifications,
      tags: contestData?.tags,
      tag: tagImage,
      rewards: {},
      badge: badgeImage,
      contestUrl: "",
      iconStatus: "",
      bonus: "2%",
      profilesMatched: " 24 profiles matched",
      quota: "50 profiles",
      buttonText: contestData?.buttonText || "Begin Hunt",
      buttonEnabled: true,
      iconsToShow: [
        "visit",
        "shares",
        "bookmarked",
        "not-interested",
        "questions",
        "post-your-query",
      ],
    });
  }, [contestData]);

  return (
    <>
      <div>
        <JobSeekerProfileStatus
          contestDetails={contestDetails}
          setActiveStep={props.setActiveStep}
          handleNotComplete={props.handleNotComplete}
        />
      </div>
    </>
  );
};

export default JobSeekerProfileCard;
