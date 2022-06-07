import React from "react";
import { Container, Wrapper, H1, HR, H11 } from "../pagesElements/ProductsElement";
import ProCard from "../components/ProCard";
import Cards from "../components/Cards";

const Products = () => {
  return (
    <Container>
      <H11>Our Products</H11>
      <HR />
      <H1>Breakfast</H1>
      <Wrapper>
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
      </Wrapper>
      <H1>Lunch</H1>
      <Wrapper>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Wrapper>
      <H1>Sneaks</H1>
      <Wrapper>
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
      </Wrapper>
    </Container>
  );
};

export default Products;
