const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const users = {};

app.post("/send-otp", (req, res) => {
  try {
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);

    users[email] = { otp, verified: false };

    sendOTP(email, otp);

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/verify-otp", (req, res) => {
  try {
    const { email, otp } = req.body;

    if (users[email] && users[email].otp == otp) {
      users[email].verified = true;
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.pass,
  },
});

function sendOTP(email, otp) {
  try {
    const mailOptions = {
      from: process.env.email,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is: ${otp}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
