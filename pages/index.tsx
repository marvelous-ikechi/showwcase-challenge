import type { NextPage } from "next";
import { SubmitButton } from "../components/Button/SubmitBtn";
import { TextInput } from "../components/TextInput/TextInput";
import { Heading } from "../components/Typography/Heading";
import { Text } from "../components/Typography/Text";
import { PageWrapper, SectionWrapper } from "../components/Container/Wrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Heading>Hi there! Welcome to your education showcase</Heading>
      <SectionWrapper>
        <Text>Type your name and click &quot;Enter&quot; below to begin</Text>
        <TextInput placeholder="Enter your name" />
        <SubmitButton>Enter</SubmitButton>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Home;
