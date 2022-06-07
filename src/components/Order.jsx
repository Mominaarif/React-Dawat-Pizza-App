import React from "react";
import "../order.css";

import {
  CheckoutButton,
  Container,
  LeftContainer,
  RightContainer,
  Row,
  Title,
  TotalText,
  TotalTextTitle,
  Wrapper,
  Table,
  TD,
  TH,
  TR,
  Quantity,
  Total,
  ID,
  Name,
  Address,
  Status,
  StatusName,
  CheckedIcon,
  Image,
} from "../componentElements/OrderElement";
import p1 from "../img/paid.png";
import p2 from "../img/checked.png";
import p3 from "../img/bake.png";
import p4 from "../img/bike.png";
import p5 from "../img/delivered.png";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    
    if (index - status < 1) return 'done';
    if (index - status === 1) return 'inProgress';
    if (index - status > 1) return 'undone';
  };

  // const pro = styles.CheckedIcon;
  // const undone = styles.CheckedIcon;

  // const display = (index) = {
  //   if (index - status === 1) return pro;
  //   if (index - status > 1) return undone;
  // }
  // if (styles.inProgress === true) {
  //   return styles.CheckedIcon;
  // }
  // if (styles.undone === true) {
  //   return styles.CheckedIcon;
  // }
  return (
    <Container>
      <LeftContainer>
        <Row>
          <Table>
            <TR>
              <TH>Order ID</TH>
              <TH>Customer</TH>
              <TH>Address</TH>
              <TH>Total</TH>
            </TR>
            <TR>
              <TD>
                <ID>1356556456436</ID>
              </TD>
              <TD>
                <Name>John Doe</Name>
              </TD>
              <TD>
                <Address>PSIC Housing Society</Address>
              </TD>
              <TD>
                <Total>$39.80</Total>
              </TD>
            </TR>
          </Table>
        </Row>
        <Row>
          <Status className={statusClass(0)} >
            <Image src={p1} alt="" width={30} height={30} />
            <StatusName>Payment</StatusName>
            <CheckedIcon className="checkedIcon">
              <Image
                className="checkedIcon"
                src={p2}
                alt=""
                width={20}
                height={20}
              />
            </CheckedIcon>
          </Status>

          <Status className={statusClass(1)}>
            <Image src={p3} alt="" width={30} height={30} />
            <StatusName>Preparing</StatusName>
            <CheckedIcon className="checkedIcon">
              <Image
                className="checkedIcon"
                src={p2}
                alt=""
                width={20}
                height={20}
              />
            </CheckedIcon>
          </Status>

          <Status className={statusClass(2)}>
            <Image src={p4} alt="" width={30} height={30} />
            <StatusName>On the way</StatusName>
            <CheckedIcon className="checkedIcon">
              <Image
                className="checkedIcon"
                src={p2}
                alt=""
                width={20}
                height={20}
              />
            </CheckedIcon>
          </Status>

          <Status className={statusClass(3)}>
            <Image src={p5} alt="" width={30} height={30} />
            <StatusName>Delivered</StatusName>
            <CheckedIcon className="checkedIcon">
              <Image
                className="checkedIcon"
                src={p2}
                alt=""
                width={20}
                height={20}
              />
            </CheckedIcon>
          </Status>
        </Row>
      </LeftContainer>
      <RightContainer>
        <Wrapper>
          <Title>CART TOTAL</Title>
          <TotalText>
            <TotalTextTitle>Subtotal:</TotalTextTitle>
            $79.60
          </TotalText>
          <TotalText>
            <TotalTextTitle>Discount:</TotalTextTitle>
            $0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle>
            $79.60
          </TotalText>
          <CheckoutButton disabled>PAID</CheckoutButton>
        </Wrapper>
      </RightContainer>
    </Container>
  );
};

export default Order;
