import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiStyledcomponents,
} from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiStyledcomponents />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Skills;
