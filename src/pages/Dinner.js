import { Container, Wrapper, H1 } from "../pagesElements/BreakElement";
import Cards from "../components/Cards";
import React from 'react'

const Dinner = () => {
  return (
    <Container>
    <H1>Dinner</H1>
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
  )
}

export default Dinner