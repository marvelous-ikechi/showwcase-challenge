import React from "react";
import { StudentsData } from "context/StudentContext";
import { Text } from "components/Typography/Text";
import { SectionWrapper } from "components/Container/Wrapper";
import { dateFormatter } from "helpers/dateFormatter";

interface Props {
  studentData: StudentsData[];
}

const EducationHistoryCard: React.FC<Props> = ({ studentData }: Props) => {
  return (
    <SectionWrapper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      {studentData?.length > 0 &&
        studentData
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
  );
};

export default EducationHistoryCard;
