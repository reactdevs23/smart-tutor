import { Button, Heading, Input, Text } from "@/components/common";
import React from "react";
import classes from "./EnterEmail.module.css";

const EnterEmail = ({ onEnterEmail, email, setEmail }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Heading xl3 primitive950 bold>
          Forgot Password
        </Heading>
        <Text base semiBold primitive600 className={classes.needAnAccount}>
          To reset your password, please enter the email address associated with
          your account
        </Text>
      </div>
      <div className={classes.inputWrapper}>
        <Input
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Email address"
        />{" "}
        <Button wFull onClick={onEnterEmail}>
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default EnterEmail;
