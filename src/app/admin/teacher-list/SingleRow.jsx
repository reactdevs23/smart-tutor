"use client";
import { useState } from "react";
import classes from "./TeacherList.module.css";
import clsx from "clsx";
import { Dropdown, Text } from "@/components/common";
import { IoIosMore } from "react-icons/io";
import Modal from "@/components/common/Modal/Modal";
import AreYouSure from "@/components/Modal/AreYouSure/AreYouSure";
import Successfull from "@/components/Modal/Successfull/Successfull";
import { remove } from "../../../../lib/api"; // Import remove function to delete teacher
import { banner } from "@/images";
import EditingModal from "@/components/Modal/Teacher/EditingModal/EditingModal";

const actionsName = ["edit", "delete"];

const SingleRow = ({
  id,
  name,
  img,
  email,
  salary,
  availability,
  medium,
  subjects,
  classes: classList,
  description,
  curriculum_type,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [actionName, setActionName] = useState("");
  const [deleted, setDeleted] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Handle deletion logic
  const handleDelete = async () => {
    try {
      // Set deleting state to true to show modal
      setDeleting(true);

      // Call API to delete teacher
      const response = await remove(`/api/teacher/${id}`); // DELETE request with teacher's ID
      if (response.status === 200) {
        setDeleted(true); // Set deleted flag to true on success
        setActionName(null); // Close the dropdown
      } else {
        throw new Error("Failed to delete teacher");
      }
    } catch (err) {
      console.error("Error deleting teacher:", err);
      // Optionally, show an error modal or message
    }
  };

  return (
    <>
      <tr>
        <td>
          <div className={classes.item}>
            <img
              src={img || banner.src} // Show default avatar if no profile picture
              alt={name}
              className={classes.profileImg}
            />
            <Text sm bold>
              {name || "N/A"}
            </Text>
          </div>
        </td>
        <td>
          <div className={classes.item}>
            <Text sm semiBold>
              <a href={`mailto:${email}`}>{email || "N/A"}</a>
            </Text>
          </div>
        </td>
        <td>
          <Text sm semiBold>
            {salary ? `${salary} TK` : "N/A"}
          </Text>
        </td>
        <td>
          <Text
            xs
            bold
            className={clsx(
              availability === true
                ? classes.available
                : availability === false
                ? classes.notAvailable
                : ""
            )}
          >
            {availability === true
              ? "Available"
              : availability === false
              ? "Not Available"
              : "N/A"}
          </Text>
        </td>
        <td>
          <Text sm semiBold>
            {curriculum_type || "N/A"}
          </Text>
        </td>
        <td>
          <div className={classes.list}>
            {subjects?.length > 0 ? (
              subjects.map((item, id) => (
                <Text sm semiBold key={id}>
                  {item}
                </Text>
              ))
            ) : (
              <Text sm semiBold>
                N/A
              </Text>
            )}
          </div>
        </td>
        <td>
          <div className={classes.list}>
            {classList?.length > 0 ? (
              classList.map((item, id) => (
                <Text sm semiBold key={id} className={classes.myClass}>
                  {item}
                </Text>
              ))
            ) : (
              <Text sm semiBold>
                N/A
              </Text>
            )}
          </div>
        </td>
        <td>
          <Dropdown
            type2
            items={actionsName}
            isActive={showDropdown}
            setIsActive={setShowDropdown}
            selectedValue={actionName}
            onSelect={(val) => setActionName(val)}
          >
            <IoIosMore className={classes.moreButton} />
          </Dropdown>

          {/* Modal for editing (can be implemented) */}
          <Modal
            isActive={actionName === "edit"}
            onClose={() => setActionName(null)}
            heading="Editing Modal"
          >
            {/* <EditingModal
              onEdit={() => {
                setActionName(null);
                setEdited(true);
              }}
              currentName={name}
              img={img}
              currentSallary={salary}
              currentSubjects={subjects}
              currentDescription={description}
              currentClassList={classList}
              currentEmail={email}
              currentAvailability={availability}
              currentMedium={medium}
              currentCurriculumType={curriculum_type}
            /> */}
          </Modal>

          {/* Are you sure modal for delete */}
          <AreYouSure
            isActive={actionName === "delete"}
            onDelete={handleDelete} // Trigger the delete handler
            onClose={() => setActionName(null)}
            heading="Delete"
            title="Are you sure you want to delete?"
          />

          {/* Success modal after deletion */}
          <Successfull
            isActive={deleted}
            onClose={() => setDeleted(false)}
            heading="Successfully Deleted"
          />

          {/* Success modal for editing */}
          {/* <Successfull
            isActive={edited}
            onClose={() => setEdited(false)}
            heading="Successfully Edited"
          /> */}
        </td>
      </tr>
    </>
  );
};

export default SingleRow;
