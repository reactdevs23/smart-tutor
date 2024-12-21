import React, { useState } from "react";
import classes from "./Verify.module.css";
import OTPInput, { ResendOTP } from "otp-input-react";

import Header from "components/Athentication/Header/Header";
import clsx from "clsx";
import { Button } from "components/common";
const renderButton = (buttonProps) => {
  return (
    <button
      {...buttonProps}
      disabled={buttonProps.remainingTime !== 0}
      className={clsx(
        classes.resend,
        buttonProps.remainingtime !== 0 && classes.notAllowed
      )}
    >
      {buttonProps.remainingTime !== 0
        ? `Resend Code (${buttonProps.remainingTime}s)`
        : "Resend"}
    </button>
  );
};
const renderTime = () => React.Fragment;
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
            Please enter valid verification code.
          </div>
        )}

        <div className={clsx(classes.actions, noResend && classes.noResend)}>
          <Button
            // to={redirect || "/forgot-password"}
            onClick={(e) => {
              setStep((prev) => prev + 1);
              onVerify && onVerify();
            }}
            size="md"
            btnPrimary
          >
            Verify
          </Button>

          {!noResend && (
            <ResendOTP
              renderButton={renderButton}
              renderTime={renderTime}
              action={() => alert("vvv")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
