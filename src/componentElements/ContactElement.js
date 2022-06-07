import styled from "styled-components";
import p1 from "../img/dish.png";

export const Container = styled.div`
margin-top: 15px;
  height: 90vh;
  overflow: hidden;
  position: relative;
  /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
`;
export const UpperContainer = styled.div`
  position: relative;
`;
export const LowerContainer = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
`;
export const H1 = styled.h1`
  font-size: 60px;
  text-align: center;
  color: #d1411e;
  letter-spacing: 25px;
  font-family: emoji;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* &:nth-child(2) {
        width: 50%;
    } */
  &:nth-child(4) {
    height: 70px;
  }
  /* &:nth-child(1) {
        width: 70%;
    } */
`;
export const Input = styled.input`
  height: 35px;
  margin-top: 5px;
  border: 1px solid gray;
  background: transparent;
  border-radius: 2px;
  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;
export const TextArea = styled.textarea`
  background: transparent;
  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  border-radius: 2px;
`;
export const Button = styled.button`
  margin-top: 15px;
  width: 140px;
  border-radius: 45px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #d1411e;
  margin-left: 38%;
`;
export const Label = styled.label`
  color: #d1411e;
  margin-top: 35px;
  font-weight: 500;
`;
export const Image = styled.img`
  width: 100vw;
  position: absolute;
  height: 100vh;
  /* background-position: center; */
  /* margin-top: 0; */
  opacity: 0.3;
`;
export const Area = styled.div`
  display: flex;
  justify-content: space-between;
  /* &:nth-child(1) {
    width: 50%;
  } */
`;
export const In = styled.div`
  flex-direction: column;
  display: flex;
  width: 48%;
`;
