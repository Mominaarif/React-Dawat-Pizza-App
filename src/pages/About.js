import React from "react";
import {
  AboutContainer,
  Button,
  Container,
  H1,
  H2,
  H3,
  Image,
  Para,
  Res,
  SubContainer,
  SubContainer1,
  SubContainer2,
  Para1,
  Wrapper,
  Grid,
  Img,
} from "../pagesElements/AboutElement";
import p1 from "../img/4.jpg";

import p2 from "../img/grid1.png";
const About = () => {
  return (
    <Container>
      <AboutContainer>
        <SubContainer>
          <H2>About Us</H2>
          <H1>Delicious food provider since 1990</H1>
          <Para>
            Good lights it very to above. Days image to sea. Over there seasons
            and spirit beast in. Greater bearing creepeth very behold fourth
            night morning seed moved.
          </Para>
          <Para>
            Good lights it very to above. Days image to sea. Over seasons and
            spirit beast in over greater bearing creepeth.
          </Para>
          <SubContainer2>
            <Button>Learn More</Button>
          </SubContainer2>
        </SubContainer>
        <SubContainer1>
          <Image src={p1} />
        </SubContainer1>
      </AboutContainer>
      <Res>
        <Wrapper>
          <H3>The Restaurant</H3>
          <Para1>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Para1>
          <Para1>
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth.
          </Para1>
        </Wrapper>
        <Grid>
          <Img src={p2}/>
        </Grid>
      </Res>
    </Container>
  );
};

export default About;
