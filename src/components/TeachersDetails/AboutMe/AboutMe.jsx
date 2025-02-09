import { Heading, Text } from "@/components/common";
import classes from "./AboutMe.module.css";
const AboutMe = () => {
  const offerd = [
    "English grammar",
    "Online education ",
    "Pre-school education ",
  ];
  return (
    <div className={classes.container}>
      <Heading bold lg className={classes.name}>
        About me
      </Heading>
      <Text xs>
        Hello, my name is Robert Fox. I come from Australia. I graduated from
        DaMi and got a PHD degree. My major is Academic Studies. I have 4 year
        (s) teaching experience. I have taught all subjects, many different age
        groups, in various schools. It is my goal to make learning engaging. My
        hobby (s) is/are bake. My profession is a professional.
      </Text>
      <div>
        <Heading medium base className={classes.label}>
          Graduated From :
        </Heading>
        <Text sm>{teacher?.graduated_from}</Text>
      </div>{" "}
      <div>
        <Heading medium base className={classes.label}>
          Subject Name :
        </Heading>
        <Text sm>{teacher?.department_name}</Text>
      </div>
      <div className={classes.list}>
        {offerd.map((el, i) => (
          <Text sm semiBold className={classes.item} key={i}>
            {el}
          </Text>
        ))}
      </div>
    </div>
  );
};
export default AboutMe;
