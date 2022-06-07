import React from "react";

// Import Local Files
import PizzaLeft from "../img/pizzaLeft.jpg";
import p1 from "../img/dish.png";
// import "../Contact.css";
import {
  Container,
  UpperContainer,
  H1,
  Image,
  Form,
  Input,
  TextArea,
  Button,
  Label,
  LowerContainer,
  Area,
  In,
} from "../componentElements/ContactElement";

const Contact = () => {
  return (
    <Container
    // style={{ backgroundImage: `url(${p1})`, marginTop: "0px"}}
    >
      <Image src={p1} />
      <UpperContainer>
        <H1>Contact Us</H1>
        <LowerContainer>
          <Form id="contact-form" method="POST">
            <Area>
              <In>
                <Label htmlFor="name">*Name</Label>
                <Input
                  placeholder="First & Last Name"
                  name="name"
                  type="text"
                />
              </In>
              <In>
                <Label htmlFor="name">*Company</Label>
                <Input
                  placeholder="Your Company Name"
                  name="email"
                  type="email"
                />
              </In>
            </Area>
            <Label htmlFor="name">*Email</Label>
            <Input
              placeholder="Best email address to contact you"
              name="email"
              type="email"
            />
            <Label htmlFor="name">*Message</Label>
            <TextArea
              rows="6"
              placeholder="A few words about your project"
              name="message"
              required
            ></TextArea>
            <Button type="submit">SUBMIT</Button>
          </Form>
        </LowerContainer>
      </UpperContainer>
    </Container>

    // <div className="contact">
    //     <div className="smallDiv">
    //         <div className="outerContainer" style={{ backgroundImage: `url(${PizzaLeft})`, width: "100%", height:"50vh" }}>
    //             <div className="innerContainer">
    //                 <h1>
    //                     CONTACT US
    //                 </h1>
    //                 <form id="contact-form" method="POST" >
    //                     <input placeholder="Enter full name..." name="name" type="text" />
    //                     <input placeholder="Enter email..." name="email" type="email" />
    //                     <textarea rows="6" placeholder="Enter message..." name="message" required ></textarea>
    //                     <button type="submit">Send Message</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>

    //     <div className="rightSide">
    //         <h1>
    //             CONTACT US
    //         </h1>
    //         <form id="contact-form" method="POST" >
    //             <label htmlFor="name">Full Name</label>
    //             <input placeholder="Enter full name..." name="name" type="text" />
    //             <label htmlFor="email">Email</label>
    //             <input placeholder="Enter email..." name="email" type="email" />
    //             <label htmlFor="message">Message</label>
    //             <textarea rows="6" placeholder="Enter message..." name="message" required ></textarea>
    //             <button type="submit">Send Message</button>
    //         </form>
    //     </div>
    // </div>
  );
};

export default Contact;
