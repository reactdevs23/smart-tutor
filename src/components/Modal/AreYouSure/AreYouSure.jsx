import Modal from "@/components/common/Modal/Modal";
import classes from "./AreYouSure.module.css";
import { Button, Heading, Text } from "@/components/common";
const AreYouSure = ({ isActive, onClose, onDelete, title }) => {
  return (
    <Modal
      heading="Do You Want To Delete"
      isActive={isActive}
      onClose={onClose}
      sm
    >
      {" "}
      <div className={classes.infoContainer}>
        <Heading xl2 semiBold textCenter>
          Confirm Deletion
        </Heading>
        <Text base primitive700 textCenter>
          You're about to delete this item. This action is irreversible. Do you
          want to continue
        </Text>
      </div>
      <Button onClick={onDelete} className={classes.button}>
        Proceed
      </Button>
    </Modal>
  );
};
export default AreYouSure;
