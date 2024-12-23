"use client";

import React, { useState } from "react";
import classes from "./LoginForm.module.css";
import { Button, Dropdown, Heading, Input, Text } from "@/components/common";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { categories } from "@/common";
import clsx from "clsx";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Teacher");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Mock API integration function
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, category: selectedCategory }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Handle successful login (e.g., redirect, save token)
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.formContainer}>
      <div className={classes.header}>
        <Heading xl3 primitive950 bold>
          Login
        </Heading>
        <Text base semiBold primitive600 className={classes.needAnAccount}>
          Access the SmartTutors admin panel using your email and passcode.
        </Text>
      </div>
      <form className={classes.inputWrapper} onSubmit={handleLogin}>
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
          items={categories}
          isActive={showDropdown}
          setIsActive={setShowDropdown}
          selectedValue={selectedCategory}
          onSelect={(val) => setSelectedCategory(val)}
        />{" "}
        <Button
          transparent
          className={classes.forgotPasword}
          to="/forgot-password"
        >
          Forgot Password
        </Button>
        {error && (
          <Text error sm className={classes.errorMessage}>
            {error}
          </Text>
        )}
        <Button
          btnPrimary
          base
          type="submit"
          disabled={isLoading}
          className={classes.submitButton}
        >
          {isLoading ? "Logging in..." : "Log In"}
        </Button>{" "}
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
