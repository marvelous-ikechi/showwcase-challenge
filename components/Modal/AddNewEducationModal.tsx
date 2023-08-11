import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { RowWrapper } from "../Container/Wrapper";
import { ModalTextInput } from "../TextInput/TextInput";
import { FormButton } from "../Button/Button";

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

Modal.setAppElement("#__next");

function AddNewEducationModal({
  modalIsOpen,
  afterOpenModal,
  closeModal,
}: Props) {
  const [course, setCourse] = React.useState<string>("");
  const [school, setSchool] = React.useState<string>("");
  const [remarkFieldCount, setRemarkFieldCount] = React.useState<number>(1);
  const [remarkFields, setRemarkFields] = React.useState<
    {
      id: number;
      value: string;
    }[]
  >([
    {
      id: 1,
      value: "",
    },
  ]);

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(e.target.value);
  };

  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
  };

  const handleAddRemarkField = () => {
    const newCount = remarkFieldCount + 1;

    setRemarkFieldCount(newCount);
    setRemarkFields([
      ...remarkFields,
      {
        id: newCount,
        value: "",
      },
    ]);
  };

  const handleRemarkFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newRemarkFields = remarkFields.map((field) => {
      if (field.id === Number(name)) {
        return {
          ...field,
          value,
        };
      }
      return field;
    });
    setRemarkFields(newRemarkFields);
  };

  const handleRemoveRemarkField = (id: number) => {
    const newCount = remarkFieldCount - 1;

    setRemarkFieldCount(newCount);
    const newRemarkFields = remarkFields.filter((field) => field.id !== id);
    setRemarkFields(newRemarkFields);
  };

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
        <div className="pr-8 mt-4">
          <ModalTextInput
            onChange={handleCourseChange}
            value={course}
            placeholder="Course studied"
          />
          <ModalTextInput
            onChange={handleSchoolChange}
            value={school}
            $marginTop="1rem"
            placeholder="School attended"
          />
          {remarkFieldCount > 0 &&
            remarkFields.map((field) => (
              <RowWrapper $marginTop="1rem" key={field.id}>
                <ModalTextInput
                  placeholder="Remark"
                  name={field.id.toString()}
                  value={field.value}
                  onChange={handleRemarkFieldChange}
                />
                {field.id !== 1 && (
                  <IoMdClose
                    size={22}
                    onClick={() => handleRemoveRemarkField(field.id)}
                  />
                )}
              </RowWrapper>
            ))}
          <RowWrapper $marginTop="14px">
            {/* disable if we have up to 6 remarks */}
            <FormButton
              disabled={remarkFieldCount >= 6}
              onClick={handleAddRemarkField}
            >
              Add Remark
            </FormButton>
            <FormButton $margin="0 0 0 10px">Save</FormButton>
          </RowWrapper>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewEducationModal;
