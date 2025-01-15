import clsx from "clsx";
import classes from "./StuedentList.module.css";

import { banner } from "@/images";
import { Heading, Text } from "@/components/common";

const StuedentList = () => {
  const data = [
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",

      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: true,
      medium: "English",
      className: "Class 8",
      subjects: ["Bangla", "English"],
    },
    {
      img: banner,
      name: "Dalim Kumar",
      email: "abc@gmail.com",
      sallary: 8000,
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      availability: true,
      medium: "English",
      className: "Class 8",
      subjects: ["Bangla", "English"],
    },
  ];
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <div className={classes.cards}>
        {data?.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.imgContainer}>
              <img src={el.img.src} alt="#" className={classes.img} />
            </div>
            <Heading bold lg>
              {el.name}
            </Heading>
            <Text xs>{el.details}</Text>
            <div className={classes.list}>
              <div className={classes.subjectList}>
                <Heading sm bold>
                  Subjct List
                </Heading>
                {el.subjects.map((subject, i) => (
                  <li key={i} className={classes.list}>
                    {subject}
                  </li>
                ))}
              </div>{" "}
              <div className={classes.subjectList}>
                <Heading primitive800 sm bold>
                  Class: {el.className}
                </Heading>
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
        ))}
      </div>
    </section>
  );
};
export default StuedentList;
