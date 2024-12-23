// TeacherList.js

"use client";
import clsx from "clsx";
import classes from "./TeacherList.module.css";
import { banner } from "@/images";

import SingleRow from "./SingleRow";

import Header from "@/components/Athentication/Header/Header";

const TeacherList = () => {
  const data = [
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "yes",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: "no",
      medium: "English",
      classList: ["class 8", "class 9"],
      subjects: ["Bangla", "English"],
    },
  ];

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header heading="Teacher List" info="All the Teacher" />
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Available</th>
              <th>Medium</th>
              <th>Subjects</th>
              <th>Classes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el, i) => (
              <SingleRow {...el} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TeacherList;
