import React from "react";
import "./Card.css";
import cardImg from "../../images/card.png";

const Card = () => {
  return (
    <>
      <div className="card__wrapper">
        <div className="card__container">
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
          <div className="card__item">
            <img src={cardImg} alt="card__img" className="card__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
