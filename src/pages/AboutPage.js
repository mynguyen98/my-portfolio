import React from "react";
import aboutImg from "../assets/about.png";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import styled from "styled-components";
import { Skills } from "../components";
const AboutPage = () => {
  return (
    <AboutContainer>
      <Container fluid className="section" id="home">
        {/* <Particle /> */}
        <Container className="section-content">
          <Row className="section-main">
            <Col md={7} className="about-header">
              <h1 className="heading">
                Know Who <span className="purple">I'm</span>
              </h1>
              <p className="introduce">
                Hi Everyone, I am <span className="purple">My Nguyen</span> from{" "}
                <span className="purple">Nghe An</span> province, Viet Nam. I
                have graduated from Ho Chi Minh University of technology with
                the major in{" "}
                <span className="purple">
                  electronics and telecommunication
                </span>
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
                <br />
                <br />
                <ImPointRight /> I really love to guide for people
                <br />
                <ImPointRight /> Playing Instrument
                <br />
                <ImPointRight /> Playing Soccer
                <br />
              </p>
            </Col>

            <Col md={5} className="image-about">
              <img src={aboutImg} alt="about pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <Container className="section-content">
          <h1 className="heading purple">Skills</h1>
          <Skills />
        </Container>
      </Container>
      {/* <Home2 /> */}
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  .section-main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .purple {
    color: var(--imp-text-color);
  }
  .introduce {
    font-size: 2.2rem;
    padding: 0 3.2rem;
  }
  .heading {
    text-align: center;
    padding-bottom: 2.4rem;
  }
  .img-fluid {
    padding: 12rem 0 5rem 0;
    max-height: 45rem;
  }
  .image-about {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 992px) {
    .heading {
      padding-top: 4.8rem;
    }
  }
`;
export default AboutPage;
