"use client";

import clsx from "clsx";
import classes from "./StuedentList.module.css";
import { banner, messageIcon, userImg } from "@/images";
import { Heading, Text } from "@/components/common";
import { useEffect, useMemo, useState } from "react";
import { get } from "@/lib/api"; // Assuming you have a GET helper in your API utility
import Header from "@/components/Athentication/Header/Header";
import { ROLES } from "../../../lib/constant";
import Pagination from "@/components/common/Pagination/Pagination";
import { useRouter } from "next/navigation";
const StuedentList = () => {
  const router = useRouter();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return students?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, students, itemsPerPage]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await get(`/api/list/${ROLES.STUDENT}`);
        console.log(response.data.data);
        if (response?.status === 200) {
          setStudents(response.data.data); // Assuming API returns a list of students in `data`
        } else {
          throw new Error(
            `Error: ${response?.statusText || "Failed to fetch"}`
          );
        }
      } catch (err) {
        console.error("Error fetching students:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header
        heading="Student List"
        info="Detailed list of Students with their subjects, and contact details"
      />{" "}
      {loading && (
        <Text lg textCenter bold>
          Loading Students...
        </Text>
      )}
      {error && (
        <Text lg primitiveError textCenter bold>{`Error: ${error}`}</Text>
      )}
      <div className={classes.cards}>
        {currentTableData?.map((el, i) => (
          <div
            className={classes.card}
            key={i}
            onClick={() => router.push(`/student-list/${el.id}`)}
          >
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
                    Class
                  </Heading>
                  <ul className={classes.listContainer}>
                    <li className={classes.item}>{el.class || "N/A"}</li>
                  </ul>
                </div>
              </div>{" "}
              <div className={classes.footer}>
                <Heading primitive800 sm bold>
                  Medium:
                </Heading>
                <p className={classes.item}>{el.curriculum_type || "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className={classes.pagination}>
        <Pagination
          currentPage={currentPage}
          totalCount={students.length}
          pageSize={itemsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
          siblingCount={0}
        />
      </div>
    </section>
  );
};

export default StuedentList;
