import React, { useState } from "react";
import classes from "./Form.module.css";
import { Button } from "components/common";
import ChangePassword from "../ChangePassword/ChangePassword";
import PasswordChanged from "../PasswordChanged/PasswordChanged";
import EnterEmail from "../EnterEmail/EnterEmail";
import Verify from "components/Athentication/ForgotPassword/Verify/Verify";

const Form = ({ step, setStep }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <section className={classes.wrapper}>
      <form action="" className={classes.form}>
        {step === 1 && (
          <EnterEmail
            email={email}
            setEmail={setEmail}
            onEnterEmail={() => {
              setStep((prev) => prev + 1);
            }}
          />
        )}
        {step === 2 && (
          <Verify
            heading="Verification Code"
            info="A Verification link was sent to your email. Please enter the confirmation code."
            setStep={setStep}
            onVerify={() => {}}
            xl2
            codeSentOn={email}
          />
        )}
        {step === 3 && (
          <ChangePassword
            setStep={setStep}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmNewPassword={confirmNewPassword}
            setConfirmNewPassword={setConfirmNewPassword}
            onSavePassword={() => {
              setStep((prev) => prev + 1);
            }}
          />
        )}
        {step === 4 && (
          <PasswordChanged
            setStep={setStep}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmNewPassword={confirmNewPassword}
            setConfirmNewPassword={setConfirmNewPassword}
          />
        )}
      </form>{" "}
      <Button transparent className={classes.button} to="/login">
        Return to Login
      </Button>
    </section>
  );
};

export default Form;
