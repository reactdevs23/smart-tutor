"use client";
import { IoChevronBack } from "react-icons/io5";

import { useEffect, useState } from "react";
import classes from "./TeacherDetails.module.css";
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

const TeacherDetails = () => {
  const params = useParams();

  const { id } = params; // Get Teacher ID from URL
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const route = useRouter();

  // Fetch specific Teacher data
  const fetchTeacher = async () => {
    if (!id) return; // Ensure `id` is available before making a request

    try {
      const response = await get(`/api/teacher/${id}`);
      if (response?.status === 200) {
        setTeacher(response.data.data);
      } else {
        throw new Error(`Error: ${response?.statusText || "Failed to fetch"}`);
      }
    } catch (err) {
      console.error("Error fetching Teacher:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeacher();
  }, [id]); // Fetch data when `id` changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!teacher) return <p>No Teacher found.</p>;
  return (
    <main className={clsx(classes.wrapper, "container")}>
      <div className={clsx(classes.container)}>
        <button className={classes.heading} onClick={route.back}>
          <IoChevronBack className={classes.arrow} /> <Heading xl>Back</Heading>
        </button>
        <Card teacher={teacher} />
        <EducationalBackgroound />
        <OnGoingCourse />
        <AboutMe teacher={teacher} /> <ContactInfo email={teacher.email} />
      </div>
    </main>
  );
};
export default TeacherDetails;
