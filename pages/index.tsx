import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

import { SubmitButton } from "components/Button/Button";
import { TextInput } from "components/TextInput/TextInput";
import { Heading } from "components/Typography/Heading";
import { Text } from "components/Typography/Text";
import { PageWrapper, SectionWrapper } from "components/Container/Wrapper";

const Home: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/main",
      query: { name: name },
    });
  };

  return (
    <PageWrapper>
      <Heading>Hi there! Welcome to your education showcase</Heading>
      <SectionWrapper>
        <Text>Type your name and click &quot;Enter&quot; below to begin</Text>
        <form onSubmit={handleSubmit}>
          <TextInput onChange={handleChange} placeholder="Enter your name" />
          {/* Disable button if name is empty */}
          <SubmitButton type="submit" disabled={name.length < 1}>
            Enter
          </SubmitButton>
        </form>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default Home;
