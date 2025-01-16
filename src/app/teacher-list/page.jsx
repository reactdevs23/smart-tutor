"use client";

import clsx from "clsx";
import classes from "./TeacherLists.module.css";

import { Heading, Text } from "@/components/common";
import { banner, messageIcon } from "@/images";
import Header from "@/components/Athentication/Header/Header";
import { ROLES } from "../../../lib/constant";
import { useState, useEffect } from "react";
import { get } from "../../../lib/api";
const TeacherLists = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await get(`/api/list/${ROLES.TEACHER}`);
        console.log(response.data.data);
        if (response?.status === 200) {
          setTeachers(response.data.data); // Assuming API returns a list of teachers in `data`
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
  console.log(teachers);

  if (loading) return <Text lg>Loading teachers...</Text>;
  if (error) return <Text lg color="red">{`Error: ${error}`}</Text>;
  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="Teacher List"
        info="Detailed list of teachers with their subjects, availability, and contact details"
      />

      <div className={classes.cards}>
        {teachers?.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.imgContainer}>
              <img src={banner.src} alt="#" className={classes.img} />
            </div>
            <div className={classes.infoContainer}>
              <div className={classes.header}>
                <Heading bold lg>
                  {el.name || "N/A"}
                </Heading>
                <a href={`mailto:${el.email || ""}`}>
                  <img src={messageIcon.src} alt="#" className={classes.icon} />
                </a>
              </div>
              <Text xs>{el.description || "N/A"}</Text>
              <div className={classes.list}>
                <div className={classes.subjectList}>
                  <Heading sm bold>
                    Subjct List
                  </Heading>

                  <ul className={classes.listContainer}>
                    {(el?.subjects && el.subjects.length > 0
                      ? el.subjects
                      : ["N/A"]
                    ).map((subject, i) => (
                      <li key={i} className={classes.item}>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>{" "}
                <div className={classes.subjectList}>
                  <Heading primitive800 sm bold>
                    Classes
                  </Heading>
                  <ul className={classes.listContainer}>
                    {(el?.classes && el.classes.length > 0
                      ? el.classes
                      : ["N/A"]
                    ).map((className, i) => (
                      <li key={i} className={classes.item}>
                        {className}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
              <div className={classes.footer}>
                <Heading primitive800 sm bold>
                  Sallary:
                  {el.sallary || "N/A"}
                </Heading>
                <Heading primitive800 sm bold>
                  {el.availability ? "Available" : "Not Available"}
                </Heading>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TeacherLists;
