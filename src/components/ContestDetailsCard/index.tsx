import React, { useEffect } from "react";
import ContestDetail from "./ContestDetail";
import { Button, Grid, Select, Typography } from "@mui/material";
import Card from "./contestCard";
import ContestIocns from "./ContestIcons";
import CashReward from "./CashReward";
import "./contestDetailsStyles.css";
import { getImageForBadge, getImageForTag } from "./getBadges";
import ContestQuota from "./contestQuota";
import {
  patchContestDetails,
  getContestDetails,
} from "../../services/ContestService";
import { CONTEST_DETAILS } from "../../constants";
import ConfirmationModel from "../ConfirmationModal/ConfirmationModel";

const companyImage = "assets/company.svg";
const experienceImage = "assets/experience.svg";
const domainSkillsImage = "assets/domainSkills.svg";
const noticeImage = "assets/notice.svg";
const locationImage = "assets/location.svg";
const calendarImage = "assets/calendar.svg";
const positionsImage = "assets/positions.svg";
const ctcImage = "assets/ctc.svg";
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
      <div className="contest-details-detail-container">
        <img src={image} alt="Icon" title={tooltip} />
        <p className="contest-details-detail-text">{text}</p>
      </div>
    )
  );
};

interface Props {
  contestDetails: ContestDetails;
}

const ContestDetailCard: React.FC<Props> = (props) => {
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
      <div className="contest-detail-card-container">
        {getImageForTag(contestDetails.tag) && (
          <img
            src={getImageForTag(contestDetails?.tag)}
            alt="tag"
            className="contest-detail-tag-image"
          />
        )}

        {getImageForBadge(contestDetails.badge) && (
          <img
            src={getImageForBadge(contestDetails?.badge)}
            alt="Badge"
            className="contest-detail-badge"
          />
        )}
        <div className="contest-detail-details-container">
          <ContestDetail contestDetails={contestDetails} />
          <div className="contest-detail-cash-rewards-container">
            <CashReward amount={contestDetails.cashReward} />
          </div>
          <Button
            variant="contained"
            className="contest-details-card-button"
            onClick={() => {
              handleBeginHunt();
            }}
            disabled={!contestDetails.buttonEnabled}
          >
            {contestDetails.buttonText}
          </Button>
          <div>
            <Button className="editcontest-button" variant="outlined">
              Edit Contest
            </Button>
          </div>
        </div>
        <div className="contest-detail-icons">
          <Typography
            variant="h4"
            sx={{
              marginRight: "128px",
              color: "#30374C",
              fontWeight: 700,
            }}
          >
            Current Phase
          </Typography>

          <select
            style={{
              width: "120px",
              fontSize: "17px",
              color: "var(--light-title)",
              borderRadius: "8px",
              height: "35px",
              backgroundColor: "#FFFFFF",
            }}
            name="phase"
            id="phase"
            onChange={handleSubStatusChange}
            value={subStatus}
          >
            <option value="new">New</option>
            <option value="submission">Submission</option>
            <option value="shortlisting">Shortlisting</option>
            <option value="evaluation">Evaluation</option>
            <option value="offer">Offer</option>
          </select>
          {/* <ContestIocns
            rating={4.3}
            id={contestDetails.id}
            iconsToShow={contestDetails.iconsToShow}
            iconStatus={contestDetails.iconStatus}
          /> */}
        </div>

        <div className="contest-details-section1">
          {renderDetails(companyImage, contestDetails.company, "Company")}
          {renderDetails(
            experienceImage,
            contestDetails.experience,
            "Experience"
          )}
          {renderDetails(
            domainSkillsImage,
            contestDetails.tools,
            "Primary Skills"
          )}
          {renderDetails(
            noticeImage,
            contestDetails.noticePeriod,
            "Notice Period"
          )}
          {renderDetails(locationImage, contestDetails.locations, "Locations")}
          {renderDetails(
            calendarImage,
            contestDetails.interviewDays,
            "Drive Type"
          )}
        </div>
        <div className="contest-details-section2">
          {renderDetails(positionsImage, contestDetails.positions, "Positions")}
          {renderDetails(ctcImage, contestDetails.ctc, "CTC")}
          {renderDetails(
            skillsImage,
            contestDetails.skills,
            "Secondary Skills"
          )}
          {renderDetails(
            degreeImage,
            contestDetails.degree,
            "Education Qualification"
          )}
          {renderDetails(tagImage, contestDetails.tags, "Domain(s)")}
        </div>
        <ConfirmationModel
          dialogAction={{
            isOpen: openModal,
            title: modalTitle,
            message:
              "Are you sure you want to Change the Active phase of this contest?",
          }}
          buttonLeftFunction={() => {
            setOpenModal((prevState) => !prevState);
          }}
          buttonRightFunction={() => {
            confirmedSubStatusChange();
          }}
        />
      </div>
      <ContestQuota
        bonus={"sssssssss"}
        profilesMatched={"seeeeeeeeee"}
        quota={"ooooooooooo"}
      />
    </Card>
  );
};

export default ContestDetailCard;
