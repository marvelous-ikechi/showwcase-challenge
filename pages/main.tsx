import React from "react";

import { PageWrapper, SectionWrapper } from "../components/Container/Wrapper";
import { Text } from "../components/Typography/Text";
import { useRouter } from "next/router";
import { GeneralButton } from "../components/Button/Button";
import AddNewEducationModal from "../components/Modal/AddNewEducationModal";
import { useStudentsContext } from "./context/StudentContext";

const Main: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  const user = name ?? "";

  const { students, addStudentData } = useStudentsContext();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const afterOpenModal = () => {};
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`bg-black pt-8 flex flex-1 flex-col h-screen  items-center
        ${students?.length === 0 && "justify-center "}
      
      w-screen`}
      id="main"
    >
      <Text>
        Welcome to {user} {"'s"} education page
      </Text>
      <GeneralButton
        onClick={() => {
          setIsModalOpen((prev) => !prev);
        }}
      >
        Add new Education
      </GeneralButton>
      <SectionWrapper>
        <AddNewEducationModal
          modalIsOpen={isModalOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </SectionWrapper>
      <SectionWrapper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {students?.map((student, key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <Text>{student.school}</Text>
            <Text>{student.course}</Text>
            {student.remarks.map((remark) => (
              <Text key={remark}>{remark}</Text>
            ))}
          </div>
        ))}
      </SectionWrapper>
    </div>
  );
};

export default Main;
