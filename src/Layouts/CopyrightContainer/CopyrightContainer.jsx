import React from "react";
import classes from "./CopyrightContainer.module.css";

import { Text } from "components/common";
import clsx from "clsx";
const CopyrightContainer = () => {
  return (
    <div className={classes.wrapper}>
      {" "}
      <div className={clsx(classes.copyRightContainer, "container")}>
        <Text base primitive200 className={classes.copyRight}>
          © 2020-2024 - <span className={classes.brandName}>Brandname</span>
        </Text>
        <div className={classes.logoContainer}>
          {/* <img src={smallLogo} alt="#" className={classes.logo} /> */}
        </div>

        <Text base semiBold primitive300 className={classes.policyAndCondition}>
          <a href="#/">Terms and Condition</a> <a href="#/">Privacy Policy</a>
        </Text>
      </div>
    </div>
  );
};

export default CopyrightContainer;