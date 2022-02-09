import React from "react";
import "./Header.css";
import img from "../images/headerImg2.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__item">
            <img src={img} alt="sun" className="header__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
