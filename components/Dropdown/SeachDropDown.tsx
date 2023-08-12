import React from "react";
import { ModalTextInput } from "../TextInput/TextInput";
import { useFetchSchools } from "../../pages/api/fetchSchools";

function SeachDropDown() {
  const [school, setSchool] = React.useState<string>("");
  const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSchool(e.target.value);
    setCloseDropDown(false);
  };
  const [closeDropdown, setCloseDropDown] = React.useState<boolean>(false);

  const handleSelectChange: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setSchool(e.currentTarget.textContent || "");
    setCloseDropDown(true);
  };

  const { data: schools, isLoading, isError } = useFetchSchools(school);

  return (
    <div className="relative">
      <ModalTextInput
        onChange={handleSchoolChange}
        value={school}
        $marginTop="1rem"
        placeholder="School attended"
      />
      {schools && school.length > 0 && !closeDropdown && (
        <div className="absolute bg-white w-full h-auto mt-1 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline overflow-y-scroll max-h-32">
          {schools?.map((school: any, key: any) => (
            <div
              onClick={handleSelectChange}
              className="mt-2 border-b p-2 cursor-pointer"
              key={key}
            >
              {school.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SeachDropDown;
