import React, { useEffect } from "react";
import ContestDetail from "../ContestDetailsCard/ContestDetail";
import { Button, Grid, Select, Typography, IconButton } from "@mui/material";
import Card from "../ContestDetailsCard/contestCard";
import ContestIocns from "../ContestDetailsCard/ContestIcons";
import CashReward from "../ContestDetailsCard/CashReward";
import "../ContestDetailsCard/contestDetailsStyles.css";
import {
  getImageForBadge,
  getImageForTag,
} from "../ContestDetailsCard/getBadges";
import ContestQuota from "../ContestDetailsCard/contestQuota";
import {
  patchContestDetails,
  getContestDetails,
} from "../../services/ContestService";
import { CONTEST_DETAILS, JOB_SEEKER_STATUS } from "../../constants";
import ConfirmationModel from "../ConfirmationModal/ConfirmationModel";
import JobSeekerProfileStatusDetails from "./JobSeekerProfileStatusDetails";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import companyImage from "../../assets/company.svg";
import experienceImage from "../../assets/experience.svg";
import positionsImage from "../../assets/positions.svg";
import ctcImage from "../../assets/ctc.svg";
import locationImage from "../../assets/location.svg";
import ratingStar from "../../assets/rating-star.svg";

const domainSkillsImage = "assets/domainSkills.svg";
const noticeImage = "assets/notice.svg";
const calendarImage = "assets/calendar.svg";
const skillsImage = "assets/skills.svg";
const degreeImage = "assets/degree.svg";
const tagImage = "assets/tag.svg";

interface ContestDetails {
  id: string;
  contestCreatedDuration?: string;
  employmentType: string;
  jobTitle: string;
  cashReward: string;
  company: string;
  experience: string;
  tools: string;
  noticePeriod: string;
  locations: string;
  interviewDays: string;
  positions: string;
  ctc: string;
  skills: string;
  degree: string;
  tags: string;
  tag: string;
  rewards: Record<string, unknown>;
  badge?: string | undefined;
  buttonText: string;
  buttonEnabled: boolean;
  iconsToShow: Array<string>;
  iconStatus?: string;
  contestUrl?: string;
  bonus: string;
  profilesMatched: string;
  quota: string;
}

const renderDetails = (image: string, text: any, tooltip: string) => {
  return (
    text && (
      <>
        <div style={{ padding: "5%", marginTop: ".5vw" }}>
          <img src={image} alt="Icon" />
        </div>
        <div style={{ color: "#626880" }}>
          <p>{text}</p>
        </div>
      </>
    )
  );
};

interface Props {
  contestDetails: ContestDetails;
}

const JobSeekerProfileStatus: React.FC<Props> = (props) => {
  const [subStatus, setSubStatus] = React.useState("");
  const { contestDetails } = props;
  const [openModal, setOpenModal] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalMessage, setModalMessage] = React.useState("");

  const handleSubStatusChange = (e: any) => {
    setOpenModal(true);
    setModalTitle("Change Phase");
    setModalMessage(e.target.value);
  };

  const confirmedSubStatusChange = () => {
    setOpenModal(false);
    setSubStatus(modalMessage);
    handleApiSubStatusChange(modalMessage);
  };

  const handleBeginHunt = () => {
    window.open(contestDetails.contestUrl);
  };

  const handleApiSubStatusChange = async (subStatus: string) => {
    let data = {
      formId: CONTEST_DETAILS,
      id: contestDetails.id,
      formData: {
        subStatus: subStatus,
      },
    };
    const response = await patchContestDetails(data);
    console.log("Settingspostdata", response);
  };

  useEffect(() => {
    const apiData = async (contestId: string) => {
      const response = await getContestDetails(contestId);
      setSubStatus(response?.data.data[0].formData.subStatus);
    };
    apiData(contestDetails.id);
  }, [contestDetails.id]);

  return (
    <Card>
      <div style={{ display: "block", padding: "1vw 2vw 1vw 1vw" }}>
        <div className="contest-detail-card-header-container">
          <div>
            {getImageForTag(contestDetails.tag) && (
              <img
                src={getImageForTag(contestDetails?.tag)}
                alt="tag"
                className="contest-detail-tag-image"
              />
            )}
          </div>
          <IconButton color="primary" aria-label="bookmark">
            <BookmarkIcon />
          </IconButton>
        </div>
        <div className="contest-detail-card-body-container">
          <div style={{ borderRight: "1px solid #DFE5FF" }}>
            <ContestDetail contestDetails={contestDetails} />
          </div>
          <div className="contest-details-container">
            <div className="contest-status-details-container">
              {JOB_SEEKER_STATUS.map((status) => (
                <div style={{ height: "100%", width: "100%" }}>
                  <JobSeekerProfileStatusDetails
                    iconFileName={status.iconFileName}
                    title={status.title}
                    data={status.data}
                  />
                </div>
              ))}
            </div>
            <div
              className="job-details-container"
              // style={{
              //   display: "flex",
              //   flexDirection: "row",
              //   height: "50%",
              // }}
            >
              <div
                className="job-details-container-container"
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   height: "100%",
                //   width: "60%",
                // }}
              >
                <div className="job-details-container-container-container">
                  {renderDetails(
                    companyImage,
                    contestDetails.company,
                    "company"
                  )}
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img src={ratingStar} alt="Icon" />
                  <p style={{ display: "inline", color: "#626880" }}>
                    {"\u00a0 4.5"}
                  </p>
                </div>
              </div>
              <div className="job-details-container-container">
                <div className="job-details-container-container-container">
                  {renderDetails(
                    experienceImage,
                    contestDetails.experience,
                    "Experience"
                  )}
                </div>
                <div className="job-details-container-container-container">
                  {renderDetails(positionsImage, "25", "positions")}
                </div>
              </div>
              <div className="job-details-container-container">
                <div className="job-details-container-container-container">
                  {renderDetails(ctcImage, "7 to 8", "ctc")}
                </div>
                <div className="job-details-container-container-container">
                  {renderDetails(
                    locationImage,
                    contestDetails.locations,
                    "location"
                  )}
                </div>
              </div>
              <div className="job-details-container-container">
                <div style={{ width: "85%", margin: "2vw 1vw 0vw 1vw" }}>
                  <Button
                    sx={{
                      borderRadius: "1vw",
                      fontSize: "1vw",
                    }}
                    variant="contained"
                  >
                    View All Uploaded Resumes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobSeekerProfileStatus;
