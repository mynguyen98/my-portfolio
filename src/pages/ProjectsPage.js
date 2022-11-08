import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../components";
import { projects } from "../utils/constants";
import shopee from "../assets/myproject/shopee.jpg";
import luxstay from "../assets/myproject/lux-stay.jpg";
import forkify from "../assets/myproject/forkify-app.jpg";
import nhaccuatui from "../assets/myproject/nhaccuatui.jpg";
import comfySloth from "../assets/myproject/comfy-sloth.jpg";
import portfolio from "../assets/myproject/portfolio.jpg";
const img = [shopee, luxstay, forkify, nhaccuatui, comfySloth, portfolio];
function ProjectsPage() {
  return (
    <ProjectContainer>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p className="project-subheading">
            Here are a few projects I've worked on recently.
          </p>
          <Row
            style={{
              justifyContent: "center",
              padding: "32px 0",
            }}
          >
            {projects.map((project, index) => {
              const { title, tech, description, gitLink, demoLink } = project;
              return (
                <Col md={6} lg={4} className="project-card">
                  <ProjectCard
                    key={index}
                    imgPath={img[index]}
                    title={title}
                    description={description}
                    gitLink={gitLink}
                    demoLink={demoLink}
                    tech={tech}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </ProjectContainer>
  );
}
const ProjectContainer = styled.section`
  padding: 14rem 0;
  .project-heading {
    text-align: center;
    font-size: 3.6rem;
  }
  .project-subheading {
    color: white;
    text-align: center;
    font-size: 1.8rem;
  }
  .project-card {
    padding: 0 24px 0 24px;
    margin-bottom: 3.2rem;
  }
  .purple {
    color: var(--imp-text-color);
  }
`;
export default ProjectsPage;
