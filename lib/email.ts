import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});
const sendMail = async (to: string, subject: string, html: string) => {
    try {
        const mailOptions = {
            from: "mdmehedihasan2360@gmail.com",
            to: to,
            subject: subject,
            html:

                `
            <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .email-header {
        text-align: center;
        color: #333333;
      }
      .email-header h1 {
        margin: 0;
      }
      .email-body {
        margin-top: 20px;
        line-height: 1.6;
        color: #555555;
      }
      .email-body p {
        margin: 0 0 20px;
      }
      .email-body .ignore {
        text-align: center;
      }
      .button-container {
        text-align: center;
      }
      .button-container .ignore {
        margin-top: 20px;
      }
      .verify-button {
        display: inline-block;
        background-color: #4caf50;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 25px;
        border-radius: 5px;
        font-weight: bold;
      }
      .email-footer {
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
        color: #999999;
      }
      .email-footer a {
        color: #999999;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="email-header">
        <h1>Verify Your Email</h1>
      </div>
      <div class="email-body">
        <p>Hi,</p>
        <p>
          Thank you for signing up on our platform! Please confirm your email
          address to get started.
        </p>
        <div class="button-container">
          <button class="verify-button" onclick="
          console.log("Mehedi hasan")
          ">Verify Email</button>
           <button onclick="showMessage()">Click Me</button>
           <button onclick="alert('Button clicked!')">Click Me</button>
          <p class="ignore">
            If you didn’t request this, please ignore this email.
          </p>
        </div>
      </div>
      <div class="email-footer">
        <p>
          &copy; 2024
          <a href="https://smart-tutor-zppl.vercel.app/" target="_blank"
            >Smart Tutor</a
          >. All rights reserved.
        </p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
      </div>
    </div>
     <script>
        function showMessage() {
            alert("Hello from the onclick event!");
        }
    </script>
  </body>
</html>
            
            `
        };

        transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error", error)
    }
}


export default sendMail;