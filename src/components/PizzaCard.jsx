import React from "react";
import {
  Container,
  Desc,
  Price,
  Title,
  Image
} from "../componentElements/PizzaCardElement";
import p1 from "../img/p5.png"

const PizzaCard = () => {
  return (
    <Container>
      <Image src={p1} alt="" width="500" height="500" />
      <Title>FIORI DI ZUCCA</Title>
      <Price>$19.90</Price>
      <Desc>Lorem ipsum dolor sit amet</Desc>
    </Container>
  );
};

export default PizzaCard;
