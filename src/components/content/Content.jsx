import React from "react";
import styles from "./content.module.css";
import Logos from "../Logos";
import axios from "axios";

const Content = () => {
  const [mail, setMail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3030/api/send", {
        from: "tmusibaudeen@gmail.com",
        to: mail,
        subject,
        message,
      });
      alert("Email sent!");
    } catch (err) {
      console.log(err);
      // alert(err);
    }
  };

  return (
    <div>
      <div className={styles.contact} id="content">
        <div className={styles.contact_col}>
          <h3>
            Send us a message <img src={Logos.eyes} alt="" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            magnam, quidem, sit quis fugiat alias neque eius, consequatur
            doloribus placeat facilis voluptatibus molestiae. Quae deleniti
            soluta, aliquam aut error sequi.
          </p>
          <ul>
            <li>
              {" "}
              <img src={Logos.message} alt="" /> contact@greetsuper.dev
            </li>
            <li>
              {" "}
              <img src={Logos.whatsapp} alt="" /> +234 70106544253
            </li>
            <li>
              {" "}
              <img src={Logos.twiter} alt="" /> 77 muyibi street olodi apapa
              Lagos. <br />
              Lagos state kingdom
            </li>
          </ul>
        </div>
        <div className={styles.contact_col}>
          <form onSubmit={handleSubmit}>
            <label> Your Email </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="example@gmail.com"
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <label htmlFor="">Subject</label>
            <input
              type="text"
              name="subject"
              id=""
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea
              name="message"
              rows="6"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className={styles.btn}>
              submit <img src={Logos.arrow} />
            </button>
          </form>
          <span>sending</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
