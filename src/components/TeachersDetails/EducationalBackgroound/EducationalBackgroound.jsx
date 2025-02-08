import { Heading, Text } from "@/components/common";
import classes from "./EducationalBackgroound.module.css";
import { melbourneUniversity, sydneyUniversity } from "@/images";

const EducationalBackgroound = () => {
  const data = [
    {
      img: melbourneUniversity,
      name: "The University of Melbourne ",
      degree: "Master's degree, Foreign languages ",
      duration: "Sep 2024-Aug 2025",
    },
    {
      img: sydneyUniversity,
      name: "Bachelor's degree, Bachelor of Architecture and Environments  ",
      degree: "The University of Sydney  ",
      duration: "May 2022-Aug 2023",
    },
  ];
  return (
    <section className={classes.container}>
      <Heading xl2 regular>
        Educational Backgroound
      </Heading>
      <Text xs>
        My educational journey has been a continuous pursuit of knowledge and
        self-improvement. I began my academic career at [Name of High School],
        where I developed a strong foundation in core subjects like mathematics,
        science, and literature.{" "}
      </Text>
      <div className={classes.universityList}>
        {data.map((el, i) => (
          <div className={classes.list} key={i}>
            <img src={el.img.src} alt="#" className={classes.universityLogo} />
            <div className={classes.info}>
              <Text xs>{el.degree}</Text>
              <Heading xl regular>
                {el.name}
              </Heading>
              <Text xs>{el.duration}</Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EducationalBackgroound;
