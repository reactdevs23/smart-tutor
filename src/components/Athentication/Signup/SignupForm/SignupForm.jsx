"use client";
import React, { useState } from "react";
import classes from "./SignupForm.module.css";

import { Button, Dropdown, Heading, Input, Text } from "@/components/common";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import clsx from "clsx";
import { categories } from "@/common";
import Link from "next/link";

const SignupForm = ({ setStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Teacher");
  return (
    <div className={classes.formContainer}>
      <div className={classes.header}>
        <Heading xl3 primitive950 bold>
          Sign Up
        </Heading>
        <Text base semiBold primitive600 className={classes.needAnAccount}>
          To Access the SmartTutors admin panel Register with following
          information
        </Text>
      </div>
      <form className={classes.inputWrapper}>
        <Input
          type="text"
          label="Name"
          value={name}
          setValue={setName}
          placeholder="Name "
        />
        <Input
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Email "
        />
        <Input
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="Password"
        />
        <Dropdown
          label="Select Category"
          items={categories}
          isActive={showDropdown}
          setIsActive={setShowDropdown}
          selectedValue={selectedCategory}
          onSelect={(val) => setSelectedCategory(val)}
        />
        <Button
          wFull
          base
          to="/sign-up"
          onClick={() => setStep((prev) => prev + 1)}
        >
          Sign up
        </Button>
      </form>
      <Text primitive600 sm className={classes.or} textCenter>
        or
      </Text>
      <div className={classes.buttonContainer}>
        <Button primitive50 base>
          <FcGoogle className={classes.logo} /> Use Google
        </Button>{" "}
        <Button primitive50 base>
          <FaApple className={clsx(classes.logo, classes.appleLogo)} /> Use
          Apple
        </Button>
        <Button primitive50 base className={classes.fbButton}>
          <FaFacebook className={clsx(classes.logo, classes.fbLogo)} /> Use
          Apple
        </Button>
      </div>{" "}
      <Text xs primitive600 className={classes.needAnAccount}>
        Already have an account?
        <Link className={classes.link} href="/login">
          Login
        </Link>
      </Text>
    </div>
  );
};

export default SignupForm;
