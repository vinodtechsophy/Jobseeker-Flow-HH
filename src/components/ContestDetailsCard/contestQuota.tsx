import React from "react";
import Card from "./contestCard";
import "./contestQuotaStyles.css";

const bonusImage = ("assets/bonus.svg");
const matchingProfilesImage = ("assets/matching-profiles-container.svg");
const quotaImage = ("assets/quota-container.svg");

interface Props {
  bonus: string;
  profilesMatched: string;
  quota: string;
}

const ContestQuota: React.FC<Props> = (props) => {
  const { bonus, profilesMatched, quota } = props;

  return (
    <>
    {/* <div className="contest-quota-image-container">
      <img src={quotaImage} alt="Quota" />
      <p className="contest-quota-text">{quota}</p>
      <p className="contest-quota-label">Total Quota</p>
    </div> */}
    <Card>
      <div className="contest-quota-container">
        <div className="contest-quota-image-container">
          <img src={bonusImage} alt="Bonus" />
          <p className="contest-quota-text">{bonus}</p>
          <p className="contest-quota-label">Bonus</p>
        </div>
        {profilesMatched && (
          <div className="contest-quota-image-container">
            <img src={matchingProfilesImage} alt="Matching Profiles" />
            <p className="contest-quota-text">{profilesMatched}</p>
            <p className="contest-quota-label">Matching Profiles</p>
          </div>
        )}
        <div className="contest-quota-image-container">
          <img src={quotaImage} alt="Quota" />
          <p className="contest-quota-text">{quota}</p>
          <p className="contest-quota-label">Total Quota</p>
        </div>
      </div>
    </Card>
    </>
  );
};

export default ContestQuota;
