import React from "react";
import classes from "./Successfull.module.css";

import { Button, Heading, Text } from "components/common";
import { successImg } from "images";
const Successfull = ({ heading, info, onBack }) => {
  return (
    <div className={classes.wrapper}>
      <img src={successImg} alt="#" className={classes.img} />
      <div className={classes.infoContainer}>
        <Heading xl2 semiBold textCenter>
          {heading}
        </Heading>
        <Text base primitive700 textCenter>
          {info}
        </Text>
      </div>
      <Button onClick={onBack} base>
        Back
      </Button>
    </div>
  );
};

export default Successfull;
