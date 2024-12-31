"use client";
import React, { useState, useEffect } from "react";
import classes from "./LoginForm.module.css";
import { Button, Dropdown, Heading, Input, Text } from "@/components/common";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import axios from "axios";
import { ROLES } from "../../../../lib/constant";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Teacher");

  useEffect(() => {
    // const userToken = localStorage.getItem("userToken");
    // if (userToken) {
    //   // If token exists, redirect to another page (e.g., dashboard)
    //   window.location.href = "/dashboard"; // Change this to your desired route
    // }
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/${selectedRole.toLocaleLowerCase()}/auth/signin`,
        {
          email,
          password,
        }
      );

      if (response.data.status === 200) {
        console.log("Sign in successful:", response.data);

        // Save the token, role, and name to localStorage
        localStorage.setItem("userToken", response.data.data.token);
        localStorage.setItem("userRole", response.data.data.role);
        localStorage.setItem("userName", response.data.data.name);

        // Redirect the user
        window.location.href = "/dashboard";
      } else {
        console.error("Unexpected response:", response);
        alert("Sign-in Unsuccessful!");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Error occurred during sign-in. Please try again.");
    }
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.header}>
        <Heading xl3 primitive950 bold>
          Sign In
        </Heading>
        <Text base semiBold primitive600 className={classes.needAnAccount}>
          Access your SmartTutors account with your email and passcode.
        </Text>
      </div>
      <form className={classes.inputWrapper} onSubmit={handleSignIn}>
        <Input
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Email"
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
          items={Object.values(ROLES)}
          isActive={showDropdown}
          setIsActive={setShowDropdown}
          selectedValue={selectedRole}
          onSelect={(val) => setSelectedRole(val)}
        />
        <Button
          transparent
          className={classes.forgotPasword}
          to="/forgot-password"
        >
          Forgot Password
        </Button>
        <Button btnPrimary base type="submit" className={classes.submitButton}>
          Sign In
        </Button>
      </form>
      <Text primitive600 sm className={classes.or} textCenter>
        or
      </Text>
      <div className={classes.buttonContainer}>
        <Button primitive50 base>
          <FcGoogle className={classes.logo} /> Use Google
        </Button>
        <Button primitive50 base>
          <FaApple className={clsx(classes.logo, classes.appleLogo)} /> Use
          Apple
        </Button>
        <Button primitive50 base className={classes.fbButton}>
          <FaFacebook className={clsx(classes.logo, classes.fbLogo)} /> Use
          Facebook
        </Button>
      </div>
      <Text xs primitive600 className={classes.needAnAccount}>
        Don't have an account?
        <Link className={classes.link} href="/sign-up">
          Sign Up
        </Link>
      </Text>
    </div>
  );
};

export default LoginForm;
