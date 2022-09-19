import React from "react";
import "./contestCardStyles.css";

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="card-container">{children}</div>;
};

export default Card;
