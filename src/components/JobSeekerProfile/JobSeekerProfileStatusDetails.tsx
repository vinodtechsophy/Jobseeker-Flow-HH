import { width } from "@mui/system";
import React from "react";
import cashReward from "../../assets/reward.svg";
import "./JobSeekerProfileStatusDetailsStyles.css";

interface Props {
  iconFileName: string;
  title?: string;
  showStar?: boolean;
  data: string;
}

const JobSeekerProfileStatusDetails: React.FC<Props> = (props) => {
  return (
    <div className="contest_status_container">
      <div className="contest-status-data-container">
        <div style={{ width: "5vw", height: "3vw" }}>
          <img
            src={`assets/images/${props.iconFileName}.svg`}
            height="100%"
            width="100%"
            alt="reward"
          />
        </div>
        <div>{props.data}</div>
      </div>
      <div className="contest-status-data-field-name-container">
        {props.title}
      </div>
    </div>
  );
};

export default JobSeekerProfileStatusDetails;
