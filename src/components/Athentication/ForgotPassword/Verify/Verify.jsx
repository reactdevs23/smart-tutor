"use client";

import React, { useState, useEffect } from "react";
import classes from "./Verify.module.css";
import OTPInput from "otp-input-react";

import Header from "@/components/Athentication/Header/Header";
import clsx from "clsx";
import { Button } from "@/components/common";

const Verify = ({
  codeSentOn, // Timestamp when the OTP was sent
  xl2, // Additional styles or classes
  onVerify, // Callback function triggered on successful verification
  noResend, // Boolean to disable resend functionality
  heading, // Heading for the page
  info, // Informational text
  setStep, // Function to update the step in the flow
}) => {
  const [OTP, setOTP] = useState(""); // User-entered OTP
  const [otpInvalid, setOtpInvalid] = useState(false); // Flag for invalid OTP
  const [remainingTime, setRemainingTime] = useState(30); // Resend timer
  const [canResend, setCanResend] = useState(false); // Flag to enable/disable resend button

  // Countdown Timer Logic
  useEffect(() => {
    let timer;
    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [remainingTime]);

  // Placeholder: Resend OTP Handler
  const handleResend = () => {
    // TODO: Backend Integration - Replace this alert with an API call
    console.log("Resend OTP triggered.");
    alert("Verification code resent! (Backend API here)");
    setRemainingTime(30); // Reset the timer
    setCanResend(false);
  };

  // Placeholder: Verify OTP Handler
  const handleVerify = (e) => {
    e.preventDefault();

    // TODO: Backend Integration - Replace this with an API call
    console.log("Verify OTP triggered with OTP:", OTP);

    if (OTP === "123456") {
      // Simulating successful validation
      setOtpInvalid(false);
      setStep((prev) => prev + 1); // Proceed to the next step
      onVerify && onVerify();
    } else {
      // Simulating invalid OTP
      setOtpInvalid(true);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Header
        xl2={xl2}
        heading={heading}
        info={info}
        codeSentOn={codeSentOn && codeSentOn}
      />
      <div className={classes.container}>
        <div className={clsx(classes.inputs, classes.noResendInputs)}>
          <OTPInput
            inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
        </div>

        {otpInvalid && (
          <div className={classes.helperError}>
            Please enter a valid verification code.
          </div>
        )}

        <div className={clsx(classes.actions, noResend && classes.noResend)}>
          <Button
            onClick={handleVerify} // Trigger OTP verification
            size="md"
            btnPrimary
          >
            Verify
          </Button>

          {!noResend && (
            <button
              onClick={handleResend} // Trigger OTP resend
              disabled={!canResend}
              className={clsx(classes.resend, !canResend && classes.notAllowed)}
            >
              {canResend ? "Resend Code" : `Resend Code (${remainingTime}s)`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
