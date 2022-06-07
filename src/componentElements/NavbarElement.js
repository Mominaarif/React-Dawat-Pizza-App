import styled from "styled-components";
import { minimobile, mobile, miniTablet, tablet, laptop } from "./Responsive";

export const Container = styled.div`
  height: 100px;
  padding: 0px 50px;
  ${minimobile({ padding: "0px 20px", height: "80px " })}
  ${mobile({ padding: "0px 30px", height: "80px" })}
  ${miniTablet({ padding: "0px 50px", height: "85px" })}
  /* ${tablet({ padding: "0px 50px", height: "100px" })} */
  /* ${laptop({ padding: "0px 50px", height: "100px" })} */

  background-color: #d1411e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  /* ${minimobile({ display: "flex" })}
  ${mobile({ display: "flex" })}
  ${miniTablet({ display: "flex" })}
  ${tablet({ display: "none" })}
  ${laptop({ display: "none" })}  */
  &:nth-child(1) {
    display: none;
    ${minimobile({ display: "flex" })}
    ${mobile({ display: "flex" })}
    ${miniTablet({ display: "flex" })}
  }
  &:nth-child(2) {
    display: none;
    flex: 3;
    justify-content: center;
    ${minimobile({ display: "flex" })}
    ${mobile({ display: "flex" })}
    ${miniTablet({ display: "flex" })}
    /* ${tablet({ display: "flex" })}
    ${laptop({ display: "flex" })} */
  }
  &:nth-child(3) {
    flex: 1;
    /* justify-content: center; */
    justify-content: flex-start;
    ${minimobile({ display: "none" })}
    ${mobile({ display: "none" })}
    ${miniTablet({ display: "none" })}
    /* ${tablet({ display: "none" })}
    ${laptop({ display: "none" })} */
  }
  &:nth-child(4) {
    flex: 3;
    justify-content: center;
    ${minimobile({ display: "none" })}
    ${mobile({ display: "none" })}
    ${miniTablet({ display: "none" })}
    /* ${tablet({ display: "none", flex: 4 })}
    ${laptop({ display: "none" })} */
  }
  &:nth-child(5) {
    flex: 1;
    justify-content: flex-end;
    /* ${mobile({ display: "flex" })}
    ${laptop({ display: "flex" })}
    ${miniTablet({ display: "flex" })}
    ${tablet({ display: "flex" })} */
  }
`;

export const Image = styled.img`
  object-fit: fill;
`;

export const CallButton = styled.div`
  /* ${miniTablet({ height: "45px" })} */
  background-color: white;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
`;

export const TextContainer = styled.div``;

export const Texts = styled.div`
  margin-left: 20px;
  color: white;
`;

export const Text = styled.div`
  &:nth-child(1) {
    /* ${tablet({ fontSize: "10px" })} */
    font-size: 12px;
    font-weight: 500;
  }
  &:nth-child(2) {
    /* ${tablet({ fontSize: "15px" })} */
    font-size: 20px;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: white;
`;

export const ListItem = styled.li`
  /* ${tablet({ fontSize: "15px" })} */
  margin: 20px;
  font-weight: 500;
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartCounter = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #d1411e;
`;
