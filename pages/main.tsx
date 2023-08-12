import React from "react";

import {
  PageWrapper,
  RowWrapper,
  SectionWrapper,
} from "../components/Container/Wrapper";
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
        <SectionWrapper>
          <div>
            {studentData?.length > 0 &&
              studentData
                ?.slice()
                ?.reverse()
                ?.map((student, key) => {
                  return (
                    <SectionWrapper
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                      key={key}
                    >
                      <a href="#">
                        <Text
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          {student.school}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "lighter",
                          }}
                        >
                          {student.course}
                        </Text>
                      </a>
                    </SectionWrapper>
                  );
                })}
          </div>
        </SectionWrapper>
        <SectionWrapper>
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
                ?.reverse()
                ?.map((student, key) => {
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
                        border: "1px solid white",
                        padding: "10px",
                        margin: "10px",
                        width: "100%",
                      }}
                    >
                      <Text>
                        {student?.course} at {student?.school}
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
        </SectionWrapper>
      </RowWrapper>
    </div>
  );
};

export default Main;
