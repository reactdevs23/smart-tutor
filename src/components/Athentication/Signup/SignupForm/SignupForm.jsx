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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          category: selectedCategory,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      // Proceed to the next step
      setStep((prev) => prev + 1);
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
          Sign Up
        </Heading>
        <Text base semiBold primitive600 className={classes.needAnAccount}>
          To access the SmartTutors admin panel, register with the following
          information.
        </Text>
      </div>
      <form className={classes.inputWrapper} onSubmit={handleSignup}>
        <Input
          type="text"
          label="Name"
          value={name}
          setValue={setName}
          placeholder="Name"
        />
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
        />
        {error && (
          <Text error sm className={classes.errorMessage}>
            {error}
          </Text>
        )}
        <Button
          wFull
          base
          type="submit"
          disabled={isLoading}
          className={classes.submitButton}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
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
        Already have an account?
        <Link className={classes.link} href="/login">
          Login
        </Link>
      </Text>
    </div>
  );
};

export default SignupForm;
