import React from "react";
import Logos from "../Logos";
import styles from "./program.module.css";

const Program = () => {
  return (
    <div className={styles.programs} id="program">
      <div className={styles.program}>
        <div>
          <img src={Logos.garaduant1} alt="" />
          <div className={styles.schoolDeatails}>
            <div className={styles.caption}>
              <img src={Logos.world} alt="" />
              <p>world class education</p>
            </div>
          </div>
        </div>

        <div>
          <img src={Logos.garaduant2} alt="" />
          <div className={styles.schoolDeatails}>
            <div className={styles.caption}>
              <img src={Logos.world} alt="" />
              <p>world class education</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Logos.garaduant3} alt="" />
          <div className={styles.schoolDeatails}>
            <div className={styles.caption}>
              <img src={Logos.world} alt="" />
              <p>world class education</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
