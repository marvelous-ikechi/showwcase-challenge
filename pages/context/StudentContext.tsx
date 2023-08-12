import React, { createContext, useContext, useState } from "react";

export interface StudentsData {
  course: string;
  school: string;
  remarks: string[];
}

interface StudentContextProps {
  students: StudentsData[];
  addStudentData: (data: StudentsData) => void;
}

const StudentContext = createContext<StudentContextProps | undefined>(
  undefined
);

export const useStudentsContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentsContext must be used within a StudentProvider");
  }
  return context;
};

//context provider
export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [students, setStudents] = useState<StudentsData[]>([]);
  const addStudentData = (data: StudentsData) => {
    setStudents([...students, data]);
  };
  return (
    <StudentContext.Provider value={{ students, addStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
