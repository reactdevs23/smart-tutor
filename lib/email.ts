import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "talrocktest@gmail.com",
    pass: "rdxfqgahngmqpcep"
  }
});
const sendMail = (to: string, subject: string, html: string) => {
  try {
    const mailOptions = {
      from: "mdmehedihasan2360@gmail.com",
      to: to,
      subject: subject,
      html: html,
    };

    transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error", error)
  }
}


export default sendMail;