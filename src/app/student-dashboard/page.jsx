"use client";

import Header from "@/components/Athentication/Header/Header";
import {
  Button,
  Input,
  MultipleChoice,
  Text,
  Input as TextArea,
} from "@/components/common";
import classes from "./StudentDashboard.module.css";
import { useState } from "react";

import { banner, uploadImg } from "@/images";
import clsx from "clsx";

const mediums = ["Bangla", "English", "Religious Studies"];
const subjectList = ["Bangla", "English", "Physics", "Chemistry"];
const allclasses = ["class 8", "class 9", "class 10", "HSC-1st year"];
const StudentDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [description, setDescription] = useState("");
  //upload img
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (!file) {
      return;
    }

    // Validate file size (10MB = 10,485,760 bytes)
    if (file.size > 10485760) {
      alert("File size exceeds 10MB. Please select a smaller file.");
      return;
    }

    // Validate file type (accepts only images)
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    // Set the selected image and preview URL
    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const [medium, setMedium] = useState("");
  const [subjects, setSubjects] = useState("");
  const [myClassName, setMyClassName] = useState("");

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.bannerContainer}>
        <img src={banner.src} alt="#" className={classes.banner} />
      </div>
      <Header
        heading="Your Info"
        info="Find a right students in your areas"
      ></Header>
      <form className={classes.inputWrapper}>
        <Input
          name="name"
          type="text"
          label="Full Name"
          value={name}
          setValue={setName}
          placeholder="Enter your full name "
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="Enter your Email "
        />

        <TextArea
          textarea
          name="description"
          type="text"
          label="Description"
          value={description}
          setValue={setDescription}
          placeholder="Enter your Description "
        />
      </form>
      <div className={classes.uploadImgContainer}>
        {previewUrl && (
          <div className={classes.preview}>
            <img
              src={previewUrl.src}
              alt="Image Preview"
              className={classes.image}
            />
          </div>
        )}
        <img src={uploadImg.src} alt="#" className={classes.uploadImg} />{" "}
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
        />{" "}
        <MultipleChoice
          options={allclasses}
          selected={myClassName}
          setSelected={setMyClassName}
          label="Select Class"
          name="classes"
        />
      </div>
      <Button type="submit">Submit</Button>
    </section>
  );
};
export default StudentDashboard;
