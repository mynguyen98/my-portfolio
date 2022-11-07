import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import homeLogo from "../assets/home-main.svg";
import { Type } from "./../components";
const Hero = () => {
  return (
    <HeroContainer>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MY NGUYEN</strong>
              </h1>

              <div className="type-container">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  .home-section {
    padding-top: 14rem;
  }
  .home-content {
    padding: 0 1.2rem;
  }
  .home-header {
    padding-top: 10rem;
    padding-left: 5rem;
  }
  .heading {
    padding-bottom: 1.5rem;
    font-size: 3.6rem;
    font-weight: 400;
  }
  .heading-name {
    font-size: 3.6rem;
    font-weight: 400;
    .main-name {
      color: var(--imp-text-color);
      font-weight: 700;
    }
  }
  .type-container {
    padding-top: 2.4rem;
    text-align: left;
    font-size: 3.2rem;
    color: var(--imp-text-color);
    font-weight: 500;
  }
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.1s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;
export default Hero;
