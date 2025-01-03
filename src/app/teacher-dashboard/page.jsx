"use client";

import Header from "@/components/Athentication/Header/Header";
import {
  Button,
  Input,
  MultipleChoice,
  Text,
  Input as TextArea,
} from "@/components/common";
import classes from "./TeacherDashboard.module.css";
import { useState } from "react";
import { handleKeyDown } from "@/hooks";
import { banner, uploadImg } from "@/images";
import clsx from "clsx";

// Dummy API function (for now)
const submitTeacherData = async (teacherData) => {
  console.log("Teacher Data Submitted:", teacherData);
  // Simulate a delay for the API call
  return new Promise((resolve) => setTimeout(resolve, 2000));
};

const availibility = ["Yes", "No"];
const mediums = ["Bangla", "English", "Religious Studies"];
const subjectList = ["Bangla", "English", "Physics", "Chemistry"];
const allclasses = ["class 8", "class 9", "class 10", "HSC-1st year"];

const TeacherDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sallary, setSallary] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAvailable, setIsAvailable] = useState("");
  const [medium, setMedium] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [classLists, setClassLists] = useState([]);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (file.size > 10485760) {
      alert("File size exceeds 10MB. Please select a smaller file.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  // Handle form submission (no API for now, just simulate with console log)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const teacherData = {
      name,
      email,
      sallary,
      description,
      image: selectedImage,
      availability: isAvailable,
      medium,
      subjects,
      classes: classLists,
    };

    try {
      // Simulate API call
      await submitTeacherData(teacherData);
      alert("Teacher data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("There was an error submitting your data.");
    }
  };

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.bannerContainer}>
        <img src={banner.src} alt="#" className={classes.banner} />
      </div>
      <Header
        heading="Your Info"
        info="Find the right students in your areas"
      />
      <form className={classes.inputWrapper} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          label="Full Name"
          value={name}
          setValue={setName}
          placeholder="Enter your full name"
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your Email"
        />
        <Input
          name="sallary"
          type="number"
          label="Salary"
          onKeyDown={handleKeyDown}
          value={sallary}
          setValue={setSallary}
          placeholder="Enter your Salary"
        />
        <TextArea
          textarea
          name="description"
          type="text"
          label="Description"
          value={description}
          setValue={setDescription}
          placeholder="Enter your Description"
        />
      </form>
      <div className={classes.uploadImgContainer}>
        {previewUrl && (
          <div className={classes.preview}>
            <img
              src={previewUrl}
              alt="Image Preview"
              className={classes.image}
            />
          </div>
        )}
        <img src={uploadImg.src} alt="#" className={classes.uploadImg} />
        <Text semiBold>
          <label htmlFor="uploadImg" className={classes.label}>
            Drag your file(s) or{" "}
            <span className={classes.highlight}>Browse</span>
          </label>
        </Text>
        <Text primitive700 textCenter>
          Max 10 MB files are allowed
        </Text>
        <input
          id="uploadImg"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={classes.imgInput}
        />
      </div>
      <div className={classes.multipleChoice}>
        <MultipleChoice
          options={availibility}
          selected={isAvailable}
          setSelected={setIsAvailable}
          label="Available Status"
          name="availability"
        />
        <MultipleChoice
          options={mediums}
          selected={medium}
          setSelected={setMedium}
          label="Select Medium"
          name="medium"
        />
        <MultipleChoice
          options={subjectList}
          selected={subjects}
          setSelected={setSubjects}
          label="Select Subjects"
          allowMultiple
          name="subjects"
        />
        <MultipleChoice
          options={allclasses}
          selected={classLists}
          setSelected={setClassLists}
          label="Select Class"
          name="classes"
          allowMultiple
        />
      </div>
      <Button type="submit">Submit</Button>
    </section>
  );
};

export default TeacherDashboard;
