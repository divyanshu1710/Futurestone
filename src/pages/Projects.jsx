import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import config from "../utils/config";


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch all projects from the backend
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/blogs`); // Endpoint fetching all blogs
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "black" }}>Here are some of our Achievements.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col key={project.id} md={4} className="project-card">
              <ProjectCard
                imgPath={`data:${project.imageType};base64,${project.image}`}
                title=<b>{project.title}</b>
                description={project.description}
                blogData={project} // Pass the entire project data
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;