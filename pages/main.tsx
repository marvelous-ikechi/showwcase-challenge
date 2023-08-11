import React from "react";
import { PageWrapper, SectionWrapper } from "../components/Container/Wrapper";
import { Text } from "../components/Typography/Text";
import { useRouter } from "next/router";
import { GeneralButton } from "../components/Button/Button";
import AddNewEducationModal from "../components/Modal/AddNewEducationModal";

const Main: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const afterOpenModal = () => {};
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <Text>Welcome to {name}&apos;s education page</Text>
      <GeneralButton onClick={() => setIsModalOpen((prev) => !prev)}>
        Add new Education
      </GeneralButton>
      <SectionWrapper>
        <AddNewEducationModal
          modalIsOpen={isModalOpen}
          afterOpenModal={afterOpenModal}
          closeModal={closeModal}
        />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Main;
