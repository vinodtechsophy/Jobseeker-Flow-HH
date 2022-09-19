import React from "react";
import wantedImage from "../../assets/wanted.svg";
import "./contestDetailStyles.css";
import {
  getImageForBadge,
  getImageForTag,
} from "../ContestDetailsCard/getBadges";

interface ContestDetails {
  id: string;
  contestCreatedDuration?: string;
  employmentType: string;
  jobTitle: string;
  cashReward: string;
  company?: string;
  experience?: string;
  badge?: string;
}

interface Props {
  contestDetails: ContestDetails;
}

const ContestDetail: React.FC<Props> = (props) => {
  const { contestDetails } = props;

  return (
    <div>
      <div className="contest-detail-container">
        <div style={{ display: "flex", flex: "1 1 0px", width: "100%" }}>
          <div style={{ width: "35%" }}>
            {getImageForBadge(contestDetails.badge) && (
              <img
                src={getImageForBadge(contestDetails?.badge)}
                alt="Badge"
                className="contest-detail-badge"
                width="85w"
                height="85vw"
              />
            )}
          </div>
          <div>
            <img
              className="contest-detail-wanted-image"
              src={wantedImage}
              alt="Wanted"
              width="80w"
              height="85vw"
            />
          </div>
          <div></div>
        </div>
        <div style={{ width: "18vw", paddingLeft: ".5vw" }}>
          <p className="contest-detail-job-type">
            {contestDetails.employmentType}
          </p>
          <div
            style={{
              minWidth: "12rem",
              // marginTop: "0.75rem",
            }}
          >
            <p className="contest-detail-job-title">
              {/* {contestDetails.jobTitle} */}
              Ruby On Rails Devloper
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
