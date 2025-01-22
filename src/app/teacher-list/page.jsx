"use client";

import clsx from "clsx";
import classes from "./TeacherLists.module.css";

import { Heading, Text } from "@/components/common";
import { banner, messageIcon, userImg } from "@/images";
import Header from "@/components/Athentication/Header/Header";
import { ROLES } from "../../../lib/constant";
import { useState, useEffect, useMemo } from "react";
import { get } from "../../../lib/api";
import Pagination from "@/components/common/Pagination/Pagination";

const TeacherLists = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return teachers?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, teachers, itemsPerPage]);
  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true); // Start loading before the API call
      try {
        const response = await get(`/api/list/${ROLES.TEACHER}`);
        if (response?.status === 200) {
          setTeachers(response.data.data); // Set teachers data
        } else {
          throw new Error(
            `Error: ${response?.statusText || "Failed to fetch"}`
          );
        }
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // End loading after the request completes
      }
    };

    fetchTeachers();
  }, []); // Empty dependency array means it runs only once when component mounts

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="Teacher List"
        info="Detailed list of teachers with their subjects, availability, and contact details"
      />
      {loading && (
        <Text lg textCenter bold>
          Loading Teacher...
        </Text>
      )}
      {error && (
        <Text bold lg primitiveError textCenter>{`Error: ${error}`}</Text>
      )}
      <div className={classes.cards}>
        {currentTableData?.map((el, i) => (
          <div className={classes.card} key={i}>
            <div className={classes.imgContainer}>
              <img
                src={el.profile_picture ? el.profile_picture : userImg.src}
                alt="#"
                className={classes.img}
              />
            </div>
            <div className={classes.infoContainer}>
              <div className={classes.header}>
                <Heading bold lg className={classes.name}>
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
                    Subject List
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
                </div>
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
              </div>
              <div className={classes.footer}>
                <Heading primitive800 sm bold>
                  Salary: {el.salary || "N/A"}
                </Heading>
                <Heading primitive800 sm bold>
                  {el.availability ? "Available" : "Not Available"}
                </Heading>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className={classes.pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={teachers.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </section>
  );
};

export default TeacherLists;
