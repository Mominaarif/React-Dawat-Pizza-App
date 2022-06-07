import React from "react";
import Cards from "../components/Cards";
import { Container, Wrapper, H1 } from "../pagesElements/BreakElement";

const Breakfast = () => {
  return (
    <Container>
      <H1>Breakfast</H1>
      <Wrapper>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Wrapper>
    </Container>
  );
};

export default Breakfast;
