import { Container, Wrapper, H1 } from "../pagesElements/BreakElement";
import ProCard from "../components/ProCard";
import React from "react";

const Snacks = () => {
  return (
    <Container>
      <H1>Sneaks</H1>
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

export default Snacks;
