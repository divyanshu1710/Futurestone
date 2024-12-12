import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ imgPath, title, description, blogData }) => {
  const navigate = useNavigate();

  // Truncate the description to a fixed number of characters
  const truncatedDescription = description.length > 300 
    ? description.substring(0, 300) + "..."
    : description;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{truncatedDescription}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate("/blog-details", { state: { blog: blogData } })}
        >
          See More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
