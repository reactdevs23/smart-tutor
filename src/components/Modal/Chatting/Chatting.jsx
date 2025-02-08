import Modal from "@/components/common/Modal/Modal";
import classes from "./Chatting.module.css";
import { Button, Heading, Text } from "@/components/common";
import ChatBox from "@/components/ChatBox/ChatBox";
const Chatting = ({ isActive, onClose, onDelete, title }) => {
  return (
    <Modal heading="Contact" isActive={isActive} onClose={onClose} sm>
      <ChatBox />
    </Modal>
  );
};
export default Chatting;
