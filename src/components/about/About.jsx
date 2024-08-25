import React, { useState } from "react";
import Logos from "../Logos";
import styles from "./about.module.css";
import PlayVideo from "../campus/videoplay/PlayVideo";

const About = ({ play, setPlay }) => {
  // setPlay(false);
  // state that control play and stop icons and are conditional rendal
  const [playStop, setPlayStop] = useState(true);

  const handlePlay = () => {
    setPlay((prv) => !prv);

    setPlayStop(!playStop);
  };

  return (
    <div className={styles.playContainer}>
      <div className={styles.play}>
        {play ? <PlayVideo play={play} setPlay={setPlay} /> : null}
      </div>
      <div className={styles.about} id="about">
        <div className={styles.aboutLeft}>
          <img src={Logos.images} alt="" className={styles.img1} />
          <img
            src={playStop ? Logos.playIcon : Logos.stop}
            onClick={handlePlay}
            alt=""
            className={styles.img2}
          />
        </div>
        <div className={styles.aboutRight}>
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nuturing Tomorrow's Leaders Today</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab.
            Omnis necessitatibus quos perferendis exercitationem officia
            voluptas nemo architecto unde illo voluptatum iusto sunt sapiente
            neque explicabo illum possimus, excepturi nobis accusamus quidem?
            Iure sapiente rem autem voluptatum consequatur dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab.
            Omnis necessitatibus quos perferendis exercitationem officia
            voluptas nemo architecto unde illo voluptatum iusto sunt sapiente
            neque explicabo illum possimus, excepturi nobis accusamus quidem?
            Iure sapiente rem autem voluptatum consequatur dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab.
            Omnis necessitatibus quos perferendis exercitationem officia
            voluptas nemo architecto unde illo voluptatum iusto sunt sapiente
            neque explicabo illum possimus, excepturi nobis accusamus quidem?
            Iure sapiente rem autem voluptatum consequatur dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
