import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <CardContainer>
      <Card className="project-card-view">
        <div className="container">
          <div className="img-container">
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt="card-img"
              class="card-img"
            />
          </div>
        </div>
        <Card.Body class="card-body">
          <Card.Title class="card-title">{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "1.8rem" }}>
            {props.tech}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify", fontSize: "1.8rem" }}>
            {props.description}
          </Card.Text>
          <div className="card-btn-container">
            <Button
              variant="primary"
              href={props.gitLink}
              target="_blank"
              className="down-btn"
            >
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
            {"\n"}
            {"\n"}

            {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
            <Button
              className="down-btn"
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  height: 100%;
  .project-card-view {
    height: 100%;
    background-color: transparent;
    padding-bottom: 3.2rem;
    border: 1px solid rgba(199, 112, 240, 0.7);
    box-shadow: 3px 3px 2px rgba(199, 112, 240, 0.6);
    transition: var(--transition);
    &:hover {
      transform: scale(1.02);
      box-shadow: 3px 3px 3px rgba(199, 112, 240, 0.6);
    }
  }
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    height: 14.5rem;
    opacity: 0.7;
    margin: 3.2rem 0;
    /* &:after {
      content: "";
      position: absolute;
      height: 1.2rem;
      width: 80%;
      background-color: red;
      bottom: 0;
      left: 0;
      transform: translateX(50%);
    } */
  }
  .img-container {
    border: 1px solid #555;
  }
  .card-img {
    max-width: 28rem;
    border: 8px solid #333;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-btn {
  }
  .card-title {
    font-size: 2rem;
    font-weight: 500;
  }
  .card-btn-container {
    margin-top: auto;
  }
`;

export default ProjectCards;
