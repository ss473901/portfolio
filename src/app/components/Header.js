import React from "react";
import "./Header.css";
import sun from "../../images/sun.png";
import cloud from "../../images/cloud.jpeg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__item">
            <img src={sun} alt="sun" className="header__img" />
          </div>
          <div className="header__item">
            <img src={cloud} alt="cloud" className="header__img" />
          </div>
          <div className="header__item">
            <img src={cloud} alt="cloud" className="header__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
