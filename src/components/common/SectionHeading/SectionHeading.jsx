import React from "react";
import classes from "./SectionHeading.module.css";
import { Heading } from "components/common";

const SectionHeading = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.hr} />
      <Heading primitiveBlue500 semiBold lg uppercase>
        {children}
      </Heading>
    </div>
  );
};

export default SectionHeading;
