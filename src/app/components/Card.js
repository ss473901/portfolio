import React from "react";
import "./Card.css";
import baloon from "../../images/baloon.png";

const Card = ({ children }) => {
  return (
    <>
      <div className="card__container">
        <img src={baloon} alt="card__img" className="card__img" />
        <div className="card__wrapper">
          <div className="card__item">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
