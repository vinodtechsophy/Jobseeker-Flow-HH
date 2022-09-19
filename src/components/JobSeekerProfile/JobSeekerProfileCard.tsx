import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerProfileStatus from "./JobSeekerProfileStatus";
import { CONTEST_DETAILS } from "../../constants";

import { getContestDetails } from "../../services/ContestService";
const JobSeekerProfileCard = () => {
  const [userId, setUserId] = React.useState("");
  const [contestData, setContestData] = React.useState<any>({});
  const [tagImage, setTagImage] = React.useState<any>("actively-hiring");
  const [badgeImage, setBadgeImage] = React.useState<any>("most-wanted");
  const searchContestDeatils = async (contestId: string) => {
    const response = await getContestDetails(contestId);
    setContestData(response?.data?.data[0].formData);
  };
  useEffect(() => {
    searchContestDeatils("1004705555594629120");
  }, [userId]);

  const navigate = useNavigate();

  const contestDetails = {
    id: "1004705555594629120",
    employmentType: contestData?.cardTaglines || "fulltime",
    jobTitle: contestData?.position || "shsjsjs",
    cashReward: `₹ ${contestData?.bounty}` || "30000",
    company: "Accenture",
    experience: `${contestData?.experience || 2} to ${
      contestData?.experience1 || 4
    } yrs`,
    tools: contestData?.technicalSkills || "java",
    noticePeriod: contestData?.requiredNoticePeriod || "5",
    locations: contestData?.country || "india",
    interviewDays: `${contestData?.dateTime} + ${contestData?.selectEndDate} `,
    positions: "",
    ctc: `${contestData?.budgetCtc2} to ${contestData?.budgetCtc} ${contestData?.denomination}`,
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
  };

  return (
    <>
      <div>
        <JobSeekerProfileStatus contestDetails={contestDetails} />
      </div>
    </>
  );
};

export default JobSeekerProfileCard;
