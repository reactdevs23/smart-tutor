"use client";
import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { Button } from "@/components/common";

// Step components
import EnterEmail from "../EnterEmail/EnterEmail";
// import Verify from "@/components/Athentication/ForgotPassword/Verify/Verify";
import ChangePassword from "../ChangePassword/ChangePassword";
import PasswordChanged from "../PasswordChanged/PasswordChanged";

const Form = ({ step, setStep }) => {
  const [email, setEmail] = useState(""); // User's email address
  const [newPassword, setNewPassword] = useState(""); // New password
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); // Confirmed password

  // Placeholder: Simulating sending the email
  const handleEnterEmail = async () => {
    console.log("Sending email to:", email);
    // TODO: Backend Integration - Add API call to send verification email
    // Example: await sendVerificationEmailAPI(email);
    setStep((prev) => prev + 1);
  };

  // Placeholder: Simulating verifying the code
  const handleVerifyCode = async () => {
    console.log("Verifying code for email:", email);
    // TODO: Backend Integration - Add API call to verify the OTP
    // Example: await verifyOTPAPI(email, otp);
    setStep((prev) => prev + 1);
  };

  // Placeholder: Simulating saving the new password
  const handleSavePassword = async () => {
    console.log("Saving new password for email:", email);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmNewPassword);

    // Example: await saveNewPasswordAPI(email, newPassword);
    setStep((prev) => prev + 1);
  };

  return (
    <section className={classes.wrapper}>
      <form action="" className={classes.form}>
        {/* Step 1: Enter Email */}
        {step === 1 && (
          <EnterEmail
            email={email}
            setEmail={setEmail}
            onEnterEmail={handleEnterEmail} // Trigger email submission
          />
        )}

        {/* Step 2: Verify Code */}
        {/* {step === 2 && (
          <Verify
            heading="Verification Code"
            info="A verification code was sent to your email. Please enter the confirmation code."
            setStep={setStep}
            onVerify={handleVerifyCode} // Trigger OTP verification
            xl2
            codeSentOn={email} // Pass email for context
          />
        )} */}

        {/* Step 3: Change Password */}
        {step === 3 && (
          <ChangePassword
            setStep={setStep}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmNewPassword={confirmNewPassword}
            setConfirmNewPassword={setConfirmNewPassword}
            onSavePassword={handleSavePassword} // Trigger password save
          />
        )}

        {/* Step 4: Password Changed */}
        {step === 4 && (
          <PasswordChanged
            setStep={setStep}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmNewPassword={confirmNewPassword}
            setConfirmNewPassword={setConfirmNewPassword}
          />
        )}
      </form>

      {/* Return to Login button (visible for steps < 4) */}
      {step < 4 && (
        <Button transparent className={classes.button} to="/login">
          Return to Login
        </Button>
      )}
    </section>
  );
};

export default Form;
