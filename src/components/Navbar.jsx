import React, { useState } from "react";
import p1 from "../img/telephone.png";
import p2 from "../img/logo-r3.png";
import p3 from "../img/cart.png";
import { Link } from "react-router-dom";
import {
  CallButton,
  CartContainer,
  CartCounter,
  Container,
  ItemContainer,
  List,
  ListItem,
  Text,
  TextContainer,
  Texts,
  Image,
} from "../componentElements/NavbarElement";
import NavbarSide from "./NavbarSide";

const Navbar = () => {
  // const [openLink, setOpenLink] = useState(false);

  // function toggle() {
  //   setOpenLink(!openLink);
  // }
  // function toggle1() {
  //   setOpenLink(!openLink);
  // }
  return (
    <Container>
      {/* 1 */}
      <ItemContainer>
        <NavbarSide />
      </ItemContainer>

      {/* 2 */}
      <ItemContainer>
      <TextContainer>
          <Image
            src={p2}
            alt="phone"
            style={{ width: "80px", height: "50px" }}
          />
        </TextContainer>
      </ItemContainer>

      {/* 3 */}
      <ItemContainer>
      <CallButton>
          <Image
            src={p1}
            alt="phone"
            style={{ width: "32px", height: "32px" }}
          />
        </CallButton>
        <TextContainer>
          <Texts>
            <Text>ORDER NOW!</Text>
            <Text>0 300 4624660</Text>
          </Texts>
        </TextContainer>
      </ItemContainer>

      {/* 4 */}
      <ItemContainer>
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/about">About</Link></ListItem>
          <ListItem><Link to="/menu">Menu</Link></ListItem>
          <ListItem>
          <Link to="/">
            <Image
              src={p2}
              alt="phone"
              style={{ width: "80px", height: "50px" }}
            />
            </Link>
          </ListItem>
          <ListItem><Link to="/products">Products</Link></ListItem>
          <ListItem><Link to="/blog">Blog</Link></ListItem>
          <ListItem><Link to="/contact">Contact</Link></ListItem>
        </List>
      </ItemContainer>

      {/* 5 */}
      <ItemContainer>
        <CartContainer>
          <Link to="/order">
            
          <Image src={p3} alt="" width="30" height="30" />
          <CartCounter>2</CartCounter>
          </Link>
        </CartContainer>
      </ItemContainer>
    </Container>
  );
};

export default Navbar;
