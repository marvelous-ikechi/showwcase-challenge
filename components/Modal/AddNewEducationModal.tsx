import React from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { RowWrapper, SectionWrapper } from "../Container/Wrapper";
import { ModalTextInput } from "../TextInput/TextInput";
import { Text } from "../Typography/Text";
import { FormButton } from "../Button/Button";
import SeachDropDown from "../Dropdown/SeachDropDown";
import {
  StudentsData,
  useStudentsContext,
} from "../../pages/context/StudentContext";

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
  const { students, addStudentData } = useStudentsContext();
  const [course, setCourse] = React.useState<string>("");
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [school, setSchool] = React.useState<string>("");
  const [tillPresent, setTillPresent] = React.useState<boolean>(false);
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
  const [studentsData, setStudentsData] = React.useState<StudentsData[]>([]);

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(e.target.value);
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

  const handleSave = () => {
    const data = {
      course,
      school,
      startDate,
      endDate,
      tillPresent,
      remarks: remarkFields.map((field) => field.value),
    };
    addStudentData(data);
    setStudentsData([...studentsData, data]);
    resetFields();
    closeModal();
    console.log(data);
  };

  const resetFields = () => {
    setCourse("");
    setSchool("");
    setRemarkFieldCount(1);
    setRemarkFields([
      {
        id: 1,
        value: "",
      },
    ]);
  };

  const handleIsPresentChange = () => {
    setTillPresent((prev) => !prev);
    if (tillPresent) {
      setEndDate(null);
      return;
    }
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
          <SeachDropDown onChange={(e) => setSchool(e)} />
          {/* add start and end date pickers*/}
          <RowWrapper
            style={{
              marginTop: "1rem",
            }}
          >
            <RowWrapper
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                width: "45%",
                flexDirection: "row",
                padding: "1rem",
              }}
            >
              <span>Start Date:</span>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </RowWrapper>

            <RowWrapper
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "0.375rem",
                width: "45%",
                flexDirection: "row",
                padding: "1rem",
              }}
            >
              <span>End Date:</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                disabled={tillPresent}
              />
            </RowWrapper>
            <SectionWrapper
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <input
                title="Till Present"
                type="checkbox"
                checked={tillPresent}
                onChange={handleIsPresentChange}
              />
              <span className="text-sm">Till Present</span>
            </SectionWrapper>
          </RowWrapper>

          {remarkFieldCount > 0 &&
            remarkFields.map((field) => (
              <RowWrapper $marginTop="1rem" key={field.id}>
                <ModalTextInput
                  placeholder="Remark"
                  name={field.id.toString()}
                  value={field.value}
                  onChange={handleRemarkFieldChange}
                />
                {/* disable close remark if we have only one remark */}
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
            <FormButton
              disabled={
                !course || !school || remarkFields.some((field) => !field.value)
              }
              onClick={handleSave}
              $margin="0 0 0 10px"
            >
              Save
            </FormButton>
          </RowWrapper>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewEducationModal;
