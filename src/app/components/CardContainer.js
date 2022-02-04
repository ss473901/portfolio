import React from "react";
import "./CardContainer.css";

const CardContainer = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default CardContainer;
