const express = require("express");
const nodemailer = require("nodemailer");

// Create an instance of Express
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// POST endpoint for sending an email
app.post("/send-email", (req, res) => {
  const { email, title, message } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    // Configure the email provider
    service: "Gmail",
    auth: {
      user: "zombieoopie@gmail.com",
      pass: "hdkwbxxagehhmayi",
    },
  });

  // Define the email options
  const mailOptions = {
    from: email,
    to: "tboyecreativesolu@gmail.com",
    subject: title,
    text: message,
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
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
