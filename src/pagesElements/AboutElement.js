import styled from "styled-components";

export const Container = styled.div``;
export const AboutContainer = styled.div`
  height: 600px;
  display: flex;
  padding: 0 200px 0 200px;
  padding-top: 50px;

  background-color: #f3f3f3;
`;
export const H1 = styled.h1`
  font-size: 60px;
  margin: 0 1px 0 1px;
  font-family: "Playfair Display", serif;
  width: 600px;
`;
export const H2 = styled.h2`
  padding-top: 15px;
  font-size: 18px;
  text-transform: capitalize;
  color: #d1411e;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;
export const Para = styled.p`
  width: 600px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 0;
  color: #555;
`;

export const SubContainer = styled.div`
  margin-right: 100px;
`;
export const SubContainer1 = styled.div``;
export const SubContainer2 = styled.div`
  margin-top: 15px;
`;

export const Button = styled.button`
  font-size: 15px;
  color: #fff;
  border: none;
  margin-top: 20px;
  background-color: #d1411e;
  text-transform: capitalize;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  z-index: 1;
  padding: 15px 38.5px;
  cursor: pointer;
  &:hover {
    color: #fff;
    border: none;
    background-color: #000;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 500px;
`;

export const Wrapper = styled.div`
  margin-left: 25vw;
`;
export const Para1 = styled.p`
  width: 50vw;
  line-height: 1.7;
  margin-bottom: 30px;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 300;
  color: gray;
`;
export const Res = styled.div`
  width: 70vw;
  align-items: center;
`;

export const H3 = styled.h1`
  padding: 50px 0 0 0;
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 50px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Grid = styled.div`
  margin-left: 25px;
`;
export const Img = styled.img`
  width: 95vw;
`;
