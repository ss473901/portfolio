import React from "react";
import styles from "./Footer.module.css";
import town from "../../images/town.png";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <img src={town} alt="card__img" className={styles.img} />
        </div>
      </div>
    </>
  );
};

export default Footer;
