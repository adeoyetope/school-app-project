import React from "react";
import Logos from "../Logos";
import styles from "./campus.module.css";

const Campus = () => {
  return (
    <div className={styles.campus}>
      <div className={styles.gallery} id="campus">
        <img src={Logos.mountain} alt="" />
        <img src={Logos.garaduant2} alt="" />
        <img src={Logos.mountain2} alt="" />
        <img src={Logos.garaduant3} alt="" />
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>
          Next Image here <img src={Logos.arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Campus;

// import React from "react";
// import Logos from "../Logos";
// import styles from "./campus.modul.css";

// const Campus = () => {
//   return (
//     <div className={styles.campus}>
//       <div className={styles.gallery}>
//         <img src={Logos.mountain} alt="" />
//         <img src={Logos.garaduant2} alt="" />
//         <img src={Logos.mountain2} alt="" />
//         <img src={Logos.garaduant3} alt="" />
//       </div>
//       <div className={styles.button}></div>
//       <button className={styles.btn}>
//         Next Image here <img src={Logos.arrow} alt="" />
//       </button>
//     </div>
//   );
// };

// export default Campus;
