"use client";

import clsx from "clsx";
import classes from "./TeacherList.module.css";
import { banner } from "@/images";
import { Heading, Text } from "@/components/common";
import { useEffect, useState } from "react";
import { get } from "@/lib/api"; // Assuming you have a GET helper in your API utility
import SingleRow from "./SingleRow";
import Header from "@/components/Athentication/Header/Header";
import { ROLES } from "../../../../lib/constant";
const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await get(`/api/list/${ROLES.TEACHER}`); // Make the API call to get teachers
        console.log(response.data.data); // Inspect the fetched data
        if (response?.status === 200) {
          setTeachers(response.data.data); // Store teacher data in the state
        } else {
          throw new Error(
            `Error: ${response?.statusText || "Failed to fetch"}`
          );
        }
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) return <Text lg>Loading teachers...</Text>;
  if (error) return <Text lg color="red">{`Error: ${error}`}</Text>;
  console.log(teachers);
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header heading="Teacher List" info="All the Teachers" />
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Sallary</th>
              <th>Availibility</th>
              <th>Medium</th>
              <th>Subjects</th>
              <th>Classes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers?.map((el, i) => (
              <SingleRow {...el} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TeacherList;
