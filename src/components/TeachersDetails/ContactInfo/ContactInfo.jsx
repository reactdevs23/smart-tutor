import { Heading, Text } from "@/components/common";
import classes from "./ContactInfo.module.css";

const ContactInfo = ({ email }) => {
  const languages = ["English", "Bengali"];

  return (
    <div className={classes.container}>
      <Heading bold lg className={classes.name}>
        Contact Info
      </Heading>{" "}
      <div className={classes.info}>
        <Text xs>Location</Text>
        <Heading lg regular>
          Dhaka, Bangladesh
        </Heading>
      </div>{" "}
      <div className={classes.info}>
        <Text xs>Email Address </Text>
        <Heading lg regular>
          {email}
        </Heading>
      </div>{" "}
      <div className={classes.info}>
        <Text xs>Languages</Text>
        <div className={classes.list}>
          {languages.map((el, i) => (
            <Text sm semiBold className={classes.item} key={i}>
              {el}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
