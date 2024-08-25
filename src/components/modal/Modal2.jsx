import React from "react";
import styles from "./modal.module.css";
// import tatiana from "../../assets/Like You - Tatiana Manaois (OFFICIAL MUSIC VIDEO).mp4";

const Modal2 = ({ setShowModal2, setShowModal, setPlay }) => {
  const closeModal = () => {
    setShowModal2(false);
    setShowModal(true);
    setPlay(true);
    console.log("closeModal is clicked");
  };
  const handelCloseModal = (e) => {
    e.preventDeault();
    setShowModal2(false);
    setShowModal(false);
    console.log("closeModal is clicked");
  };

  return (
    <div className={styles.modal_backdrop}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h1>WELCOME TO THE INTERRACTIVE PAGE</h1>{" "}
          <button className={styles.btn} onClick={closeModal}>
            back
          </button>
        </div>
        <div className={styles.modal_body}>
          <h2>You gonna see more from here</h2>
          <p>
            Thank you for reaching out to us. We will get back to you shortly.
          </p>
          <form onSubmit={handelCloseModal}>
            <p>
              <input
                type="email"
                placeholder="Enter your mail to see more"
                required
              />
            </p>

            <div className={styles.modal_footer}>
              {/* <button className={styles.btn1} onClick={closeModal}>
              Cancle
            </button> */}
              <button className={styles.btn2}>OK</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
