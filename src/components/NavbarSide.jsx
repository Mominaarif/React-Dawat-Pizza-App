import React, { useState } from "react";

import Close from "@mui/icons-material/Close";
import { Menu } from "@mui/icons-material";
import {
  Container,
  HiddenMenuLogo,
  List,
  ListItem,
  SidebarContainer,
  Icon,
  SidebarMenu,
  HideOrderBtn,
} from "../componentElements/NavbarSideElement";
import { Link } from "react-router-dom";

const NavbarSide = () => {
  const [openLink, setOpenLink] = useState(false);

  function toggle() {
    setOpenLink(!openLink);
  }
  function toggle1() {
    setOpenLink(!openLink);
  }
  return (
    <Container>
      <div>
        <button
          onClick={toggle}
          style={{ backgroundColor: "#d1411e", border: "none", color: "white" }}
        >
          <Menu style={{ fontSize: "40px" }} />
        </button>
        <div
          className="hiddenLinks"
          style={{ display: openLink ? "block" : "none" }}
        >
          <SidebarContainer>
            <HiddenMenuLogo>
              <Icon>
                <Close
                  onClick={toggle1}
                  style={{ color: "white", fontSize: "40px" }}
                />
              </Icon>
            </HiddenMenuLogo>

            <SidebarMenu>
              <List>
                <ListItem>
                  <Link to="/" onClick={toggle}>Home</Link>
                </ListItem>
                <ListItem>
                  <Link to="/about" onClick={toggle}>About</Link>
                </ListItem>
                <ListItem>
                  <Link to="/menu" onClick={toggle}>Menu</Link>
                </ListItem>
                <ListItem>
                  <Link to="/products" onClick={toggle}>Products</Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog" onClick={toggle}>Blog</Link>
                </ListItem>
                <ListItem>
                  <Link to="/contact" onClick={toggle}>Contact</Link>
                </ListItem>
              </List>
            </SidebarMenu>
            <HideOrderBtn>
            <Link to="/order" onClick={toggle}>
              <p>Order Now</p>
              </Link>
            </HideOrderBtn>
          </SidebarContainer>
        </div>
      </div>
    </Container>
  );
};

export default NavbarSide;
