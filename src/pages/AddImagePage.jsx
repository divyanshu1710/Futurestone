import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import config from "../utils/config";

function AddImagePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();  // Initialize navigate function

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !description || !image) {
      setError("All fields are required!");
      return;
    }

    // Reset error and success
    setError("");
    setSuccess(false);

    // Prepare form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      // API call to upload image
      const response = await fetch(`${config.API_BASE_URL}/blogs`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/blogs");  // Redirect to /blogs after 2 seconds
        }, 2000);
      } else {
        setError("Failed to upload image. Please try again.");
      }
    } catch (error) {
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="add-image-page">
      <h2>Add Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Image uploaded successfully!</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddImagePage;
