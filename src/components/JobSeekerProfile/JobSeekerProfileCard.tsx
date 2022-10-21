import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobSeekerProfileStatus from "./JobSeekerProfileStatus";
import { CONTEST_DETAILS } from "../../constants";

import { getContestDetails } from "../../services/ContestService";
const JobSeekerProfileCard = (props) => {
  const [userId, setUserId] = React.useState("");
  const [contestData, setContestData] = React.useState<any>({});
  const [tagImage, setTagImage] = React.useState<any>("actively-hiring");
  const [badgeImage, setBadgeImage] = React.useState<any>("most-wanted");
  const searchContestDeatils = async (contestId: string) => {
    const response = await getContestDetails(contestId);
    setContestData(response?.data?.data[0].formData);
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
        <JobSeekerProfileStatus contestDetails={contestDetails} />
      </div>
    </>
  );
};

export default JobSeekerProfileCard;
