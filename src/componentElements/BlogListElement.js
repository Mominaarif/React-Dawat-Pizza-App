import styled from "styled-components";

export const Container = styled.div`
  /* width: 22%; */
  display: flex;
  flex-direction: column;
  /* padding: 10px; */
  /* padding: 20px 20px; */
  /* align-items: center;
  justify-content: center; */
  cursor: pointer;
`;

export const Title = styled.h1`
  margin-top: 5px;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  font-family: "Josefin Sans", Arial, sans-serif;
  margin-bottom: 0;
`;

export const Image = styled.img`
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: block;
  width: 100%;
  height: 270px;
`;

export const Image1 = styled.img`
  width: 20px;
`;

export const Desc = styled.div`
  text-align: left;
  color: #777;
`;

export const P = styled.p``;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DateContainer1 = styled.div`
  margin-left: 5px;
  margin-top: 3px;
  display: flex;
  flex-direction: row;
`;

export const Desc1 = styled.div`
  text-align: left;
  color: #777;
`;

export const Desc2 = styled.p`
  margin-bottom: 15px;
  margin-top: 0;
  width: 300px;
  font-size: 13px;
`;
