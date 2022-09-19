import React from "react";
import cashReward from "../../assets/reward.svg";
import "./cashRewardStyles.css";

interface Props {
  amount: string;
  title?: string;
  showStar?: boolean;
}

const CashReward: React.FC<Props> = (props) => {
  const { amount, title = "Cash Reward", showStar = true } = props;
  return (
    <div className="cash-reward-container">
      {amount && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <div>
              <img
                className="cash-reward-image"
                src={cashReward}
                alt="reward"
              />
            </div>
            <div className="cash-reward-content">
              <p className="cash-reward-amount">
                {showStar ? `${amount}*` : amount}
              </p>
            </div>
          </div>
          <div style={{ height: "30%" }}>
            <p>{title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CashReward;
