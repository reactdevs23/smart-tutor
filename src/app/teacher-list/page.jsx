import clsx from "clsx";
import classes from "./TeacherLists.module.css";

import { Heading, Text } from "@/components/common";
import { banner } from "@/images";
import Header from "@/components/Athentication/Header/Header";

const TeacherLists = () => {
  const data = [
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.",
      availability: true,
      medium: "English",
      classList: ["Class 8", "Class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "John Doe",
      email: "john.doe@gmail.com",
      sallary: 7500,
      details:
        "John has extensive experience in teaching high school students, with a focus on literature and history.",
      availability: false,
      medium: "English",
      classList: ["Class 10", "Class 11"],
      subjects: ["History", "Literature"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.",
      availability: true,
      medium: "English",
      classList: ["Class 8", "Class 9"],
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "John Doe",
      email: "john.doe@gmail.com",
      sallary: 7500,
      details:
        "John has extensive experience in teaching high school students, with a focus on literature and history.",
      availability: false,
      medium: "English",
      classList: ["Class 10", "Class 11"],
      subjects: ["History", "Literature"],
    },
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="Teacher List"
        info="Detailed list of teachers with their subjects, availability, and contact details"
      />

      <div className={classes.cards}>
        {data?.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.imgContainer}>
              <img src={el.img.src} alt="#" className={classes.img} />
            </div>
            <div className={classes.infoContainer}>
              <Heading bold lg>
                {el.name}
              </Heading>
              <Text xs>{el.details}</Text>
              <div className={classes.list}>
                <div className={classes.subjectList}>
                  <Heading sm bold>
                    Subjct List
                  </Heading>
                  <ul className={classes.listContainer}>
                    {el.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </div>{" "}
                <div className={classes.subjectList}>
                  <Heading primitive800 sm bold>
                    Classes
                  </Heading>
                  <ul className={classes.listContainer}>
                    {el.classList.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                </div>
                <Heading primitive800 sm bold>
                  Sallary:
                  {el.sallary}
                </Heading>{" "}
                <Heading primitive800 sm bold>
                  Email:
                  {el.email}
                </Heading>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeacherLists;
