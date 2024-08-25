import React, { useEffect } from "react";
import styles from "./modal.module.css";
import Modal2 from "./Modal2";
import { useState } from "react";
import video from "../../assets/Like You - Tatiana Manaois (OFFICIAL MUSIC VIDEO).mp4";

// a modal is a interractive popup window that usually has header, body and footer buttons, the header must contains close button

const Modal = ({ setShowModal }) => {
  const [showModal2, setShowModal2] = useState(false);
  const [play, setPlay] = useState(false);
  // function that set modal 2
  const hanldleModal2 = () => {
    setShowModal2(true);
    console.log("hanldleModal2 is clicked");

    setPlay(false);
    console.log(`${play}`);
  };
  // funtion that close modal 1
  const closeModal = () => {
    setShowModal(false);
    setPlay(true);
    console.log("closeModal is clicked");
  };

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div>
      <div className={styles.modal_backdrop}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <h1>This is modal</h1>{" "}
            <button className={styles.btn} onClick={closeModal}>
              X
            </button>
          </div>

          <div className={styles.modal_body}>
            <h2>Your message has been sent successfully.</h2>
            <p>
              Thank you for reaching out to us. We will get back to you shortly.{" "}
              <b>Enjoy this</b>
            </p>
            {play ? (
              <video className={styles.video} src={video} controls></video>
            ) : null}
            <div className={styles.modal_footer}>
              <button className={styles.btn1} onClick={closeModal}>
                Cancle
              </button>
              <button className={styles.btn2} onClick={hanldleModal2}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal2 ? (
        <Modal2
          setShowModal2={setShowModal2}
          setShowModal={setShowModal}
          setPlay={setPlay}
        />
      ) : null}
    </div>
  );
};

export default Modal;
