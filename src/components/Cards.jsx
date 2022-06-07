import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  Container,
  H1,
  H2,
  H4,
  Image,
  MiniContainer,
} from "../componentElements/CardElement";
import p1 from "../img/1.png";

const Cards = () => {
  return (
    <Container>
      <Link to="/product">
        <CardContainer>
          <Image src={p1} />
          <MiniContainer>
            <H1>PORK SANDWICH</H1>
            <H2>They're wherein heaven seed hath nothing</H2>
            <H4>Form $40.00</H4>
          </MiniContainer>
        </CardContainer>
      </Link>
    </Container>
  );
};

export default Cards;
