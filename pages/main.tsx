import React from "react";

import { RowWrapper } from "../components/Container/Wrapper";
import { Text } from "../components/Typography/Text";
import { useRouter } from "next/router";
import { GeneralButton } from "../components/Button/Button";
import AddNewEducationModal from "../components/Modal/AddNewEducationModal";
import { useStudentsContext } from "./context/StudentContext";
import Bookmark from "../components/Main/Bookmark";
import EducationHistoryCard from "../components/Main/EducationHistoryCard";

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

  const studentData = students ?? [];

  return (
    <div
      className={`bg-black m-0 p-0 pt-8 flex flex-1 flex-col h-screen  items-center
        ${studentData?.length === 0 && "justify-start "}
      w-screen`}
      id="main"
    >
      <Text>
        Welcome to {user}
        {"'s"} education page
      </Text>
      <GeneralButton
        onClick={() => {
          setIsModalOpen((prev) => !prev);
        }}
      >
        Add new Education
      </GeneralButton>
      <RowWrapper
        style={{
          width: "100%",
          paddingLeft: "10px",
          paddingRight: "20px",
          alignItems: "start",
          marginTop: "40px",
        }}
      >
        {/* Bookmark menu*/}
        <Bookmark studentData={studentData} />
        <AddNewEducationModal
          modalIsOpen={isModalOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
        {/* Education card */}
        <EducationHistoryCard studentData={studentData} />
      </RowWrapper>
    </div>
  );
};

export default Main;
