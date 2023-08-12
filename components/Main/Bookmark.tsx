import React from "react";
import { StudentsData } from "../../context/StudentContext";
import { Text } from "../Typography/Text";
import { SectionWrapper } from "../Container/Wrapper";

interface Props {
  studentData: StudentsData[];
}

const Bookmark: React.FC<Props> = ({ studentData }: Props) => {
  return (
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
  );
};

export default Bookmark;
