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
      {/* alt needs to be plain text; make sure caller passes a string title */}
      <Card.Img variant="top" src={imgPath} alt={typeof title === 'string' ? title : ''} />
      <Card.Body>
        {/* title can be JSX if caller wants formatting.  for simple string titles we
            render them in bold to match previous appearance. */}
        <Card.Title>
          {typeof title === 'string' ? <b>{title}</b> : title}
        </Card.Title>
        <Card.Text>{truncatedDescription}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate("/blog-details", { state: { blog: blogData } })} // Pass the blog data
        >
          See More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;

