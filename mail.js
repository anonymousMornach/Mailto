const express = require("express");
const nodemailer = require("nodemailer");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

// Create an instance of Express
const app = express();

// Middleware to parse JSON data
app.use(express.json());

//Enable Cors
app.use(cors());

// POST endpoint for sending an email
app.post("/send-email", async (req, res) => {
  const { name, email, title, message } = req.body;

//  try {
    // Make a request to ZeroBounce API for email validation
   // const response = await axios.get("https://api.zerobounce.net/v2/validate", {
    //  params: {
      //  api_key: process.env.ZEROBOUNCE_API_KEY,
        //email: email,
      //},
   // });

    // Get the result from ZeroBounce API
   // const { status } = response.data;

    // Check if the email is valid or not
   // if (status === "Valid") {
      // Create a transporter for sending emails
      const transporter = nodemailer.createTransport({
        // Configure the email provider
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      // Define the email options
      const mailOptions = {
        from: email,
        to: "tboyecreativesolu@gmail.com",
        subject: `TBOYE CUSTOMER SERVICE`,
        text: `Subject: ${title}\nCustomer name: ${name}\nCustomer email: ${email}\nCustomer message: ${message}`,
      };

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res
            .status(500)
            .json({ error: "An error occurred while sending the email." });
        } else {
          console.log("Email sent:", info.response);
          res.status(200).json({ message: "Email sent successfully!" });
        }
      });
    //}else {
      //res.status(400).json({ message: "Invalid email address." });
    //}
  //} catch (error) {
    //console.error(error);
    //res
      //.status(500)
      //.json({ error: "An error occurred while validating the email." });
  //}
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
