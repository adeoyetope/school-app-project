import React from "react";
import styles from "./hero.module.css";
import Logos from "../Logos";

const Hero = ({ setShowModal }) => {
  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.hero} id="hero">
      <div>
        <h1>Hello Student</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          dignissimos sed explicabo ipsam tenetur voluptatum non omnis ut
          eligendi unde!
        </p>
        <div className={styles.pbtn}>
          <button className={styles.btn} onClick={handleModal}>
            view more <img src={Logos.arrow} alt="" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
