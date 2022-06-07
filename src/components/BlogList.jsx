import React from "react";
import {
  Container,
  Desc,
  Desc2,
  Title,
  Image,
  Image1,
  DateContainer,
  DateContainer1,
  P,
  Desc1,
} from "../componentElements/BlogListElement";
import p1 from "../img/16.png";
import p2 from "../img/chat.png";

const PizzaCard = () => {
  return (
    <Container>
      <Image src={p1} alt="" width="500" height="500" />
      <DateContainer>
        <Desc>Sept 28, 2018 Admin</Desc>
        <Desc>
          <DateContainer1>
            <Desc1>
              <Image1 src={p2} />  
            </Desc1>
            <Desc> 3</Desc>
          </DateContainer1>
        </Desc>
      </DateContainer>
      <Title>FIORI DI ZUCCA</Title>
      <Desc2>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Desc2>
    </Container>
  );
};

export default PizzaCard;
