import clsx from "clsx";
import React from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Button } from "../../common";
import classes from "./VerificationCode.module.css";

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

const VerificationCode = ({
  otpInvalid,
  setOtpInvalid,
  otp,
  setOTP,
  handler,
  setStep,
  noResend,
  onVerify,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.inputs, classes.noResendInputs)}>
        <OTPInput
          inputClassName={clsx(classes.input, otpInvalid && classes.hasError)}
          value={otp}
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
            // setStep && setStep((prev) => prev + 1);
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
  );
};

export default VerificationCode;
