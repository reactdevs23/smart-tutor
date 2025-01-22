"use client";

import clsx from "clsx";
import classes from "./TeacherList.module.css";
import { banner } from "@/images";
import { Heading, Text } from "@/components/common";
import { useEffect, useMemo, useState } from "react";
import { get } from "@/lib/api"; // Assuming you have a GET helper in your API utility
import SingleRow from "./SingleRow";
import Header from "@/components/Athentication/Header/Header";
import { ROLES } from "../../../../lib/constant";
import Pagination from "@/components/common/Pagination/Pagination";
const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return teachers?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, teachers, itemsPerPage]);
  const handleDeleteSuccess = (id) => {
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
  };
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
  // Edit student details (update student data)
  const handleEditTeacher = (updatedTeachers) => {
    setTeachers((prevTeachers) =>
      prevTeachers.map((teacher) =>
        teacher.id === updatedTeachers.id ? updatedTeachers : teacher
      )
    );
  };

  return (
    <section className={clsx(classes.wrapper, "container")}>
      <Header heading="Teacher List" info="All the Teachers" />

      {/* Display student table only if data is available */}
      <div className={clsx(classes.tableContainer, "overflow")}>
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
            {currentTableData?.map((el, i) => (
              <SingleRow
                {...el}
                key={i}
                onEdit={handleEditTeacher}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))}
          </tbody>
        </table>
      </div>
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

export default TeacherList;
