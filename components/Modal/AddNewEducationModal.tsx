import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { RowWrapper } from "../Container/Wrapper";
import { ModalTextInput } from "../TextInput/TextInput";

interface Props {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#modal");
function AddNewEducationModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}: Props) {
  return (
    <div id="modal">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex w-full items-end justify-end" onClick={closeModal}>
          <IoMdClose size={22} />
        </div>
        <form className="pr-8 mt-4">
          <ModalTextInput placeholder="Course studied" />
          <ModalTextInput marginTop="1rem" placeholder="School attended" />

          <ModalTextInput marginTop="1rem" placeholder="Remark" />
          <RowWrapper marginTop="14px">
            <button>Add Remark</button>
            <button>Save</button>
          </RowWrapper>
        </form>
      </Modal>
    </div>
  );
}

export default AddNewEducationModal;
