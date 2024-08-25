// import nodemailer from "nodemailer";

// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(express.json());
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "tmusibaudeen@gmail.com",
//     pass: "08138159372",
//   },
// });
// app.post("/api/send", (req, res) => {
//   const mailOptions = {
//     from: req.body.from,
//     to: req.body.to,
//     subject: req.body.subject,
//     html: req.body.message,
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     res.status(200).send("Email sent successfully");
//   });
// });
// const port = 3030;
// app.listen(port, () => console.log(`Server running on port ${port}`));
