"use client";
import { IoChevronBack } from "react-icons/io5";

import { useEffect, useState } from "react";
import classes from "./StudentDetails.module.css";
import { get } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import { messageIcon, userImg } from "@/images";
import { Heading, Text } from "@/components/common";
import EducationalBackgroound from "@/components/TeachersDetails/EducationalBackgroound/EducationalBackgroound";
import { OnGoingCourse } from "@/components/TeachersDetails/OnGoingCourse/OnGoingCourse";
import AboutMe from "@/components/TeachersDetails/AboutMe/AboutMe";
import Card from "@/components/TeachersDetails/Card/Card";
import ContactInfo from "@/components/TeachersDetails/ContactInfo/ContactInfo";

const StudentDetails = () => {
  const params = useParams();

  const { id } = params; // Get Student ID from URL
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const route = useRouter();

  // Fetch specific Student data
  const fetchStudent = async () => {
    if (!id) return; // Ensure `id` is available before making a request

    try {
      const response = await get(`/api/student/${id}`);
      if (response?.status === 200) {
        setStudent(response.data.data);
      } else {
        throw new Error(`Error: ${response?.statusText || "Failed to fetch"}`);
      }
    } catch (err) {
      console.error("Error fetching Student:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]); // Fetch data when `id` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!student) return <p>No Student found.</p>;
  return (
    <main className={clsx(classes.wrapper, "container")}>
      <div className={clsx(classes.container)}>
        <button className={classes.heading} onClick={route.back}>
          <IoChevronBack className={classes.arrow} /> <Heading xl>Back</Heading>
        </button>
        <Card data={student} />
        <EducationalBackgroound />
        <OnGoingCourse />
        <AboutMe /> <ContactInfo email={student.email} />
      </div>
    </main>
  );
};
export default StudentDetails;
