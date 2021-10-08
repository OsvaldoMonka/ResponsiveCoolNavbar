import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Column2,
  Column3,
  Column4,
  FooterLink,
  Heading,
} from "./FooterStyles";
import Logo from "../../assets/images/ie6.png";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Column3>
          <h1
            style={{
              color: "White",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "-60px",
            }}
          >
            IE-Consulting Albania
          </h1>
        </Column3>
        <Row>
          <Column2>
            <div
              style={{
                marginTop: "-50px",
                marginBottom: "-30%",
                //   alignSelf: "flex-start",
              }}
            >
              <img src={Logo} alt="Logo" height="100%" width="100%" />
            </div>
          </Column2>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Pamela Thellipi</FooterLink>
            <FooterLink href="#">Pamela Thellipi</FooterLink>
            <FooterLink href="#">Pamela Thellipi</FooterLink>
            <FooterLink href="#">Pamela Thellipi</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Column4>
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          <span
            style={{
              color: "#fff",
            }}
          >
            2021 &copy;
            <a
              target="_blank"
              href="https://al.linkedin.com/in/osvaldo-monka-a72442174"
            >
              Osvaldo Monka <br></br>
            </a>
            All rights reserved.
          </span>
        </div>
      </Column4>
    </Box>
  );
};
export default Footer;
