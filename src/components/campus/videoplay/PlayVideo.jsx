import React from "react";
import video from "../../../assets/Like You - Tatiana Manaois (OFFICIAL MUSIC VIDEO).mp4";

const styles = {
  width: "600px",
  maxWidth: "800px",
  height: "400px",
  margin: "2px solid gold",
  boxShadow: "0 7px 7px 5px grey, 0 7px 7px 5px gold ,0 7px 7px 5px grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   position: "fixed",
};

const style2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //   backdrop-filter:
  //   position: "fixed",
};
// const style3 = { with: "100vw", height: "100vh", backgroundColor: "#fff" };

const PlayVideo = ({ play }) => {
  return (
    <div>
      <div style={style2}>
        {play ? <video style={styles} src={video} controls></video> : ""}
      </div>
    </div>
  );
};

export default PlayVideo;
