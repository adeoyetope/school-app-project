import React from "react";
import styles from "./title.module.css";

const Title = ({ subtitle, title }) => {
  return (
    <div>
      <div className={styles.title}>
        <p>{subtitle}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Title;
