import { Heading } from "@/components/common";
import classes from "./OnGoingCourse.module.css";
import clsx from "clsx";
import SingleRow from "./SingleRow";
export const OnGoingCourse = () => {
  const data = [
    {
      code: "5GY-11-OS-008 ",
      name: "English Language Arts ",
      numberOfLesson: "9 lessons",
      duration: "1 month",
      status: "Ongoing",
      price: "$129.00 ",
    },
    {
      code: "10H-V7-005D-202E   ",
      name: "Math  ",
      numberOfLesson: "8 lessons",
      duration: "3 weeks",
      status: "Start Soon",
      price: "$99.00  ",
    },
    {
      code: "3A2-XN-009K  ",
      name: "Science  ",
      numberOfLesson: "7 lessons",
      duration: "2 weeks",
      status: "Start Soon",
      price: "$99.00  ",
    },
    {
      code: "7B1-F2-00A3-1E  ",
      name: "History   ",
      numberOfLesson: "6 lessons",
      duration: "2 weeks",
      status: "Start Soon",
      price: "$109.00  ",
    },
    {
      code: "8R2-HS-01Z8-4F",
      name: "Music ",
      numberOfLesson: "8 lessons",
      duration: "3 weeks",
      status: "END PREVIOUS Month",
      price: "$139.00",
    },
  ];
  return (
    <div className={classes.container}>
      <Heading xl2 regular className={classes.heading}>
        Ongoing Courses
      </Heading>

      <div className={clsx(classes.tableContainer, "overflow")}>
        <table className={classes.table}>
          {/* <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Medium</th>
              <th>Description</th>
              <th>Subjects</th>
              <th>Classes</th>
              <th>Action</th>
            </tr>
          </thead> */}
          <tbody>
            {data?.map((el, i) => (
              <SingleRow key={i} {...el} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
