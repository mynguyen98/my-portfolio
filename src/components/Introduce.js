import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Introduce() {
  return (
    <IntroduceContainer>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 className="heading-introduce">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I have learnt and build some projects base on
                <i>
                  <b className="purple"> HTML, CSS, JavaScript, </b>
                </i>
                <span>Modern Library and Frameworks like </span>
                <i>
                  {" "}
                  <b className="purple">
                    ReactJS, React Bootstrap, Styled Components.{" "}
                  </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products. </b>
                </i>
                <br />
                <br />
                I'm a very ambitious front-end developer looking for a role in
                an established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/mynguyen98"
                    className=" home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/canhmy1998/"
                    className=" home-social-icons"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/m%E1%BB%B9-nguy%E1%BB%85n-c%E1%BA%A3nh-7034ab222/"
                    className=" home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/xuoimy/"
                    className="home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </IntroduceContainer>
  );
}

const IntroduceContainer = styled.div`
  .home-about-section {
    padding-top: 14rem;
  }
  .heading-introduce {
    font-size: 3.6rem;
    text-align: center;
    line-height: 5.2rem;
    padding-bottom: 2.4rem;
  }
  .purple {
    color: var(--imp-text-color);
  }
  .white {
    color: white;
  }
  .home-about-body {
    font-size: 1.8rem;
  }
  .myAvtar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-about-social {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 6.4rem 0;
    h1 {
      font-size: 3.6rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  .home-about-social-links {
    padding-top: 2.4rem;
    display: flex;
    /* gap: 1.8rem; */
    .social-icons {
      display: inline-block;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      text-align: center;
    }
    .home-social-icons {
      color: #700c86;
      position: relative;
      display: block;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      text-align: center;
      font-size: 2.2rem;
      background: rgba(255, 255, 255, 0.972);
      border-radius: 50%;
      transition: 0.5s;
      &:hover {
        color: #87209e;
        box-shadow: 0 0 5px #87209e;
        text-shadow: 0 0 5px #87209e;
      }
    }
  }
`;
export default Introduce;
