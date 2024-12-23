import React from "react";
import classes from "./ChangePassword.module.css";
import Header from "@/components/Athentication/Header/Header";
import { Button, Input } from "@/components/common";

const ChangePassword = ({
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
  onSavePassword,
}) => {
  return (
    <div className={classes.wrapper}>
      <Header
        heading="Change Password"
        info="Enter your new password. Ensure your password is strong enough."
      />
      <div className={classes.inputWrapper}>
        <Input
          type="password"
          value={newPassword}
          setValue={setNewPassword}
          placeholder="New password"
        />
        <Input
          type="password"
          value={confirmNewPassword}
          setValue={setConfirmNewPassword}
          placeholder="Confirm new password"
        />
        <Button wFull onClick={onSavePassword}>
          Reset Password
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;
