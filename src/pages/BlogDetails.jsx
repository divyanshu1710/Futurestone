import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const { blog } = location.state; // Retrieve the blog data passed from the ProjectCard
  console.log(blog)
  console.log(blog.title)

  return (
    <div className="blog-details" style={{ color: "white" }}>
      {/* <h1 style={{ color: "white" }}>{blog.title }</h1> */}
      <img 
        src={blog.image} 
        alt={blog.title} 
        style={{ 
          maxWidth: "100%", 
          marginTop: "80px",
          marginBottom: "10px",  // Adds space below the image
          padding: "10px",        // Adds space around the image
          borderRadius: "8px",    // Optional: Adds rounded corners to the image
        }} 
      />
      <h1 style={{ color: "white",marginBottom:"10px" }}>{blog.title }</h1>
      <p>{blog.description}</p> 
    </div>
  );
};

export default BlogDetails;
