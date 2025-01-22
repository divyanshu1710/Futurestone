

// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";

// // Initial mock projects (use image paths relative to the public directory)
// const initialProjects = [
//   {
//     id: 1,
//     title: "Project One",
//     description: "Description for Project One.",
//     image: "../assets/1.jpeg", // Path to image inside public/images
//   },
//   {
//     id: 2,
//     title: "Project Two",
//     description: "Description for Project Two.",
//     image: "../assets/2.jpeg", // Path to image inside public/images
//   },
//   {
//     id: 3,
//     title: "Project Three",
//     description: "Description for Project Three.",
//     image: "../assets/3.jpeg", // Path to image inside public/images
//   },
// ];

// const Projects = () => {
//   // State to handle projects and new project form data
//   const [projects, setProjects] = useState(initialProjects);
//   const [newProject, setNewProject] = useState({
//     title: "",
//     description: "",
//     image: "", // Initially empty image
//   });

//   // Handle file input change (image upload)
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewProject((prevProject) => ({
//           ...prevProject,
//           image: reader.result, // Store the base64 image data
//         }));
//       };
//       reader.readAsDataURL(file); // Convert image to base64
//     }
//   };

//   // Handle form submission to add a new project
//   const handleAddProject = (event) => {
//     event.preventDefault();

//     if (!newProject.title || !newProject.description || !newProject.image) {
//       alert("Please fill out all fields, including the image.");
//       return;
//     }

//     const newProjectData = {
//       ...newProject,
//       id: projects.length + 1, // Assign a unique id to the new project
//     };

//     setProjects((prevProjects) => [...prevProjects, newProjectData]);

//     // Clear the form
//     setNewProject({
//       title: "",
//       description: "",
//       image: "",
//     });
//   };

//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           Recent Top <strong className="yellow">Works</strong>
//         </h1>
//         <p style={{ color: "black" }}>Here are some of our Achievements.</p>

//         {/* Form to add a new project */}
//         {/* <Form onSubmit={handleAddProject}>
//           <Form.Group>
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter project title"
//               value={newProject.title}
//               onChange={(e) =>
//                 setNewProject({ ...newProject, title: e.target.value })
//               }
//               required
//             />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               placeholder="Enter project description"
//               value={newProject.description}
//               onChange={(e) =>
//                 setNewProject({ ...newProject, description: e.target.value })
//               }
//               required
//             />
//           </Form.Group>

//           <Form.Group>
//             <Form.Label>Project Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               required
//             />
//           </Form.Group>

//           <Button type="submit" variant="primary">
//             Add Project
//           </Button>
//         </Form> */}

//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           {projects.map((project) => (
//             <Col key={project.id} md={4} className="project-card">
//               <ProjectCard
//                 imgPath={project.image || "/images/default-image.png"} // Use default image if no image
//                 title={<b>{project.title}</b>}
//                 description={project.description}
//                 blogData={project}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Container>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

// Example initial projects (with image paths from the public folder)
const initialProjects = [
  {
    id: 1,
    title: "Project two",
    description: "Full description for Project One. This will be shown when the user clicks 'See More'.",
    image: "../assets/1.jpeg", // Image path (local file inside public folder)
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full description for Project Two. This will be shown when the user clicks 'See More'.",
    image: "../assets/2.jpeg", // Image path (local file inside public folder)
  },
  {
    id: 3,
    title: "Project Three",
    description: "Full description for Project Three. This will be shown when the user clicks 'See More'.",
    image: "../assets/3.jpeg", // Image path (local file inside public folder)
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);

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
                imgPath={project.image || "/images/default-image.png"} // If no image, use the default
                title={<b>{project.title}</b>}
                description={project.description}
                blogData={project} // Pass the entire project data to the card
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

