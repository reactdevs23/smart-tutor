import React, { useState, useEffect } from "react";
import classes from "./Verify.module.css";
import clsx from "clsx";
import { Button } from "@/components/common";
import Header from "@/components/Athentication/Header/Header";

const Verify = ({
  codeSentOn,
  xl2,
  onVerify,
  noResend,
  heading,
  info,
  setStep,
}) => {
  const [OTP, setOTP] = useState("");
  const [otpInvalid, setOtpInvalid] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [OtpInput, setOtpInput] = useState(null); // Lazy load OTPInput

  // Lazy load OTPInput on client side
  useEffect(() => {
    const loadOtpInput = async () => {
      const { default: OTPInput } = await import("otp-input-react");
      setOtpInput(() => OTPInput);
    };
    loadOtpInput();
  }, []);

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

  const handleResend = () => {
    console.log("Resend OTP triggered.");
    alert("Verification code resent! (Backend API here)");
    setRemainingTime(30);
    setCanResend(false);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (OTP === "123456") {
      setOtpInvalid(false);
      setStep((prev) => prev + 1);
      onVerify && onVerify();
    } else {
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
          {OtpInput && (
            <OtpInput
              inputClassName={clsx(
                classes.input,
                otpInvalid && classes.hasError
              )}
              value={OTP}
              onChange={setOTP}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
            />
          )}
        </div>

        {otpInvalid && (
          <div className={classes.helperError}>
            Please enter a valid verification code.
          </div>
        )}

        <div className={clsx(classes.actions, noResend && classes.noResend)}>
          <Button onClick={handleVerify} size="md" btnPrimary>
            Verify
          </Button>

          {!noResend && (
            <button
              onClick={handleResend}
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
