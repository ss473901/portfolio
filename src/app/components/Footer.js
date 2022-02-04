import React from "react";
import "./Footer.css";
import town from "../../images/town.png";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="item">
          <img src={town} alt="card__img" className="img" />
        </div>
      </div>
    </>
  );
};

export default Card;
