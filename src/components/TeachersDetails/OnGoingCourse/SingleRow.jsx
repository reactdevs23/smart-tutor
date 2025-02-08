import { useState } from "react";

import { Heading, Text } from "@/components/common";

import classes from "./OnGoingCourse.module.css";
import clsx from "clsx";

const SingleRow = ({ code, name, numberOfLesson, duration, status, price }) => {
  return (
    <>
      <tr>
        <td>
          <div className={classes.item}>
            <Text xs>{code}</Text>
            <Heading lg regular>
              {name}
            </Heading>
          </div>
        </td>
        <td>
          <Text base>
            {numberOfLesson}/{duration}
          </Text>
        </td>
        <td>
          <Text
            sm
            semiBold
            className={clsx(
              classes.status,
              status.toLowerCase() === "ongoing" && classes.onGoing,
              status.toLowerCase() === "start soon" && classes.startSoon,
              status.toLowerCase() === "end previous month" &&
                classes.endPreviousMonth
            )}
          >
            <span>{status}</span>
          </Text>
        </td>
        <td>
          <Text base bold>
            {price}
          </Text>
        </td>
      </tr>
    </>
  );
};

export default SingleRow;
