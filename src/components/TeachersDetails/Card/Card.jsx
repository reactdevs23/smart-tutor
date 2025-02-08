import { messageIcon, userImg } from "@/images";
import classes from "./Card.module.css";
import { Heading, Text } from "@/components/common";
import { useState } from "react";
import Chatting from "@/components/Modal/Chatting/Chatting";
const Card = ({ data }) => {
  const [showChattingModal, setShowChattingModal] = useState(false);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img
            src={data.profile_picture ? data.profile_picture : userImg.src}
            alt="#"
            className={classes.img}
          />
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.header}>
            <Heading bold lg className={classes.name}>
              {data.name || "N/A"}
            </Heading>
            <button onClick={() => setShowChattingModal(true)}>
              <img src={messageIcon.src} alt="#" className={classes.icon} />
            </button>
          </div>
          <Text xs>{data.description || "N/A"}</Text>
        </div>
      </div>
      <Chatting
        isActive={showChattingModal}
        onClose={() => setShowChattingModal(false)}
      />
    </>
  );
};
export default Card;
