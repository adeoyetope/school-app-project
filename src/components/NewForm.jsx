import React from "react";
import { useState } from "react";
import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post("/api/send", {
      from: "tmusibaudeen@gmail.com",
      to,
      subject,
      message,
    });
    alert("Email sent!");
  } catch (err) {
    alert(err);
  }
};

const styles = { display: "block" };

const NewForm = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div style={styles}>
      <form onSubmit={handleSubmit} style={{ display: "block" }}>
        <input
          type="email"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          rows="3"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default NewForm;
