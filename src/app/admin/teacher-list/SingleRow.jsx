"use client";
import { useState } from "react";
import classes from "./TeacherList.module.css";
import clsx from "clsx";
import { Dropdown, Text } from "@/components/common";
import { IoIosMore } from "react-icons/io";
import Modal from "@/components/common/Modal/Modal";
import EditingModal from "@/components/Modal/Teacher/EditingModal/EditingModal";
import AreYouSure from "@/components/Modal/AreYouSure/AreYouSure";
import Successfull from "@/components/Modal/Successfull/Successfull";
const actionsName = ["edit", "delete"];

const SingleRow = ({
  name,
  img,
  email,
  sallary,
  availability,
  medium,
  subjects,
  classList,
  description,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [actionName, setActionName] = useState("");

  const [edited, setEdited] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleted, setDeleted] = useState(false);
  return (
    <>
      <tr>
        <td>
          <div className={classes.item}>
            <img src={img.src} alt={name} className={classes.profileImg} />
            <Text sm bold>
              {name}
            </Text>
          </div>
        </td>
        <td>
          <div className={classes.item}>
            <Text sm semiBold>
              <a href={`mailto:${email}`}>{email}</a>
            </Text>
          </div>
        </td>
        <td>
          <Text sm semiBold>
            {sallary} TK
          </Text>
        </td>
        <td>
          <Text
            xs
            bold
            className={clsx(
              availability === "yes"
                ? classes.available
                : availability === "no"
                ? classes.notAvailable
                : ""
            )}
          >
            {availability}
          </Text>
        </td>
        <td>
          <Text sm semiBold>
            {medium}
          </Text>
        </td>
        <td>
          <div className={classes.list}>
            {subjects?.map((item, id) => (
              <Text sm semiBold key={id}>
                {item}
              </Text>
            ))}
          </div>
        </td>
        <td>
          <div className={classes.list}>
            {classList?.map((item, id) => (
              <Text sm semiBold key={id} className={classes.myClass}>
                {item}
              </Text>
            ))}
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
          <Modal
            isActive={actionName === "edit"}
            onClose={() => setActionName(null)}
            heading="Editing Modal"
          >
            <EditingModal
              onEdit={() => {
                setActionName(null);
                setEdited(true);
              }}
              currentName={name}
              img={img}
              currentSallary={sallary}
              currentSubjects={subjects}
              currentDescription={description}
              currentClassList={classList}
              currentEmail={email}
              currentAvailability={availability}
              currentMedium={medium}
            />
          </Modal>
          <AreYouSure
            isActive={actionName === "delete"}
            onDelete={() => {
              setDeleted(true);
              setActionName(null);
            }}
            onClose={() => setDeleting(null)}
            heading="Delete"
            title="Are you sure you want to Delete"
          />
          <Successfull
            isActive={deleted}
            onClose={() => setDeleted(null)}
            heading="Successfull"
          />
          <Successfull
            isActive={edited}
            onClose={() => setEdited(null)}
            heading="Successfull"
          />
        </td>
      </tr>
    </>
  );
};
export default SingleRow;
