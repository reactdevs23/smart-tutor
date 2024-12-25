"use client";

import Header from "@/components/Athentication/Header/Header";
import {
  Button,
  Input,
  MultipleChoice,
  Text,
  Input as TextArea,
} from "@/components/common";
import classes from "./EditingModal.module.css";
import { useState } from "react";
import { handleKeyDown } from "@/hooks";
import { banner, uploadImg } from "@/images";
import clsx from "clsx";

const mediums = ["Bangla", "English", "Religious Studies"];
const subjectList = ["Bangla", "English", "Physics", "Chemistry"];
const allclasses = ["class 8", "class 9", "class 10", "HSC-1st year"];
const EditingModal = ({
  currentName,
  currentEmail,
  currentSallary,
  currentDescription,
  currentImg,
  currentAvailability,
  currentMedium,
  currentSubjects,
  currentClassName,
  onEdit,
}) => {
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [sallary, setSallary] = useState(currentSallary);

  const [description, setDescription] = useState(currentDescription);
  //upload img
  const [selectedImage, setSelectedImage] = useState(currentImg);
  const [previewUrl, setPreviewUrl] = useState();

  const handleImageChange = (event) => {
    const { value, checked } = event.target;

    if (allowMultiple) {
      setSelected((prevSelected) => {
        const updated = checked
          ? [...prevSelected, value]
          : prevSelected.filter((option) => option !== value);
        console.log("Updated selection:", updated); // Debugging log
        return [...updated]; // Force re-render
      });
    } else {
      console.log("Updated selection:", value); // Debugging log
      setSelected(value); // Force re-render for single selection
    }
  };

  const [medium, setMedium] = useState(currentMedium);
  const [subjects, setSubjects] = useState(currentSubjects);
  const [myClassName, setMyClassName] = useState(currentClassName);

  return (
    <section className={clsx(classes.wrapper)}>
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
          name="medium-selection"
        />
        <MultipleChoice
          options={subjectList}
          selected={subjects}
          setSelected={setSubjects}
          label="Select Subjects"
          allowMultiple={true}
          name="subject-selection"
        />
        <MultipleChoice
          options={allclasses}
          selected={myClassName}
          setSelected={setMyClassName}
          label="Select Class"
          allowMultiple={true}
          name="class-selection"
        />
      </div>
      <Button type="submit" onClick={onEdit}>
        Submit
      </Button>
    </section>
  );
};
export default EditingModal;
