import React from "react";
import { PageWrapper, SectionWrapper } from "../components/Container/Wrapper";
import { Text } from "../components/Typography/Text";
import { useRouter } from "next/router";

const Main: React.FC = () => {
  const router = useRouter();
  const { name } = router.query;
  return (
    <PageWrapper>
      <Text>Welcome to {name}&apos;s education page</Text>
    </PageWrapper>
  );
};

export default Main;
