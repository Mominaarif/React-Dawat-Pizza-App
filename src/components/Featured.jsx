import React, { useState } from "react";

import {
  ArrowContainer,
  Container,
  ImageContainer,
  Wrapper,
  Image
} from "../componentElements/FeaturedElement";
import p1 from "../img/arrowl.png";
import p2 from "../img/arrowr.png";
import p4 from "../img/p4.png";
import p5 from "../img/pizza2311.png";
import p3 from "../img/p3.png";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const images = [p5, p4, p3];
  return (
    <Container>
      <ArrowContainer style={{ left: 0 }} onClick={() => handleArrow("l")}>
        <Image src={p1} style={{ width: "80px", height: "80px" }} alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
      <Wrapper style={{ transform: `translateX(${-100 * index}vw)` }}>
        {images.map((img, x) => (
          <ImageContainer>
            <Image src={img} key={x} alt="" layout="fill" objectFit="contain" priority="false" />
          </ImageContainer>
        ))}
      </Wrapper>
      <ArrowContainer style={{ right: 0 }} onClick={() => handleArrow("r")}>
        <Image src={p2} style={{ width: "80px", height: "80px" }} alt="" layout="fill" objectFit="contain" />
      </ArrowContainer>
    </Container>
  );
};

export default Featured;
