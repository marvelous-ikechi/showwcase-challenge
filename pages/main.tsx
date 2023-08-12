import React from "react";

import { PageWrapper, SectionWrapper } from "../components/Container/Wrapper";
import { Text } from "../components/Typography/Text";
import { useRouter } from "next/router";
import { GeneralButton } from "../components/Button/Button";
import AddNewEducationModal from "../components/Modal/AddNewEducationModal";
import { useStudentsContext } from "./context/StudentContext";
import { dateFormatter } from "./helpers/dateFormatter";

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
      className={`bg-black pt-8 flex flex-1 flex-col h-screen  items-center
        ${studentData?.length === 0 && "justify-center "}

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
          alignItems: "start",
        }}
      >
        {studentData &&
          students?.length > 0 &&
          students
            ?.slice()
            .reverse()
            .map((student, key) => {
              const endDate =
                student?.tillPresent === true
                  ? "Present"
                  : dateFormatter(student?.endDate);
              return (
                <SectionWrapper
                  key={key}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    border: "1px solid black",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <Text>
                    Graduate {student?.course} at {student?.school}
                  </Text>
                  <Text>
                    {student.startDate
                      ? `${dateFormatter(student?.startDate)}`
                      : ""}{" "}
                    - {endDate}
                  </Text>

                  <ul>
                    {student?.remarks?.map((remark, key) => (
                      <li className="text-white" key={key}>
                        {remark}
                      </li>
                    ))}
                  </ul>
                </SectionWrapper>
              );
            })}
      </SectionWrapper>
    </div>
  );
};

export default Main;
