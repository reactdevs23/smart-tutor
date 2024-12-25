"use client";

import React, { useState } from "react";
import classes from "./Signup.module.css";
import clsx from "clsx";

import SignupForm from "@/components/Athentication/Signup/SignupForm/SignupForm";
import VerifyYourEmail from "@/components/Athentication/Signup/VerifyYourEmail/VerifyYourEmail";
import { authenticationImg } from "@/images";
import { post } from "@/lib/api";

const Signup = () => {
  const [step, setStep] = useState(1);

  const test = async ()=>{
    const response = post('/api/admin/auth/signin',
      {
        email:"test",
        name:"tesh",
        password: "test"
      }
    );
  }

  return (
    <section className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <img src={authenticationImg.src} alt="#" className={classes.img} />
        {step === 1 && <SignupForm setStep={setStep} />}
        {step === 2 && <VerifyYourEmail />}
      </div>
    </section>
  );
};

export default Signup;
