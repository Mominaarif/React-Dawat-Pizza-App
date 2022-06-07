import styled from "styled-components";

export const Container = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding: 20px 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #d1411e;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #666;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export const Desc = styled.p`
  text-align: center;
  color: #777;
`;
