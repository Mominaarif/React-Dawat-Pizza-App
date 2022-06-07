import { Container, Wrapper, H1 } from "../pagesElements/BreakElement";
import ProCard from "../components/ProCard";
import React from "react";

const Lunch = () => {
  return (
    <Container>
      <H1>Lunch</H1>
      <Wrapper>
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
      </Wrapper>
    </Container>
  );
};

export default Lunch;
