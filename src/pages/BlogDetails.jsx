import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

const BlogDetails = () => {
  const { state } = useLocation();

  if (!state || !state.blog) {
    return <p>Error: Blog data not found!</p>;
  }

  const { title, description, image, imageType } = state.blog;

  return (
    <Container className="blog-details">
      <h1>{title}</h1>
      <img
        src={`data:${imageType};base64,${image}`}
        alt={title}
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <p>{description}</p>
    </Container>
  );
};

export default BlogDetails;
