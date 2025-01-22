import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [attachment, setAttachment] = useState(null);
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [fileSize, setFileSize] = useState("");  // To store the file size

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 50 * 1024 * 1024) {
        setAttachment(file);
        // Convert file size to a readable format
        const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
        setFileSize(`${sizeInMB} MB`);
      } else {
        alert("File size exceeds 50 MB. Please choose a smaller file.");
        setAttachment(null);
        setFileSize("");  // Clear file size if the file is not accepted
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("from_name", formData.from_name);
    formDataToSend.append("reply_to", formData.reply_to);
    formDataToSend.append("message", formData.message);
    if (formData.phone) {
      formDataToSend.append("phone", formData.phone);
    }
    if (attachment) {
      formDataToSend.append("attachment", attachment);
    }

    try {
      await axios.post("http://localhost:8080/send-email", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDone(true);
      // Clear form data and attachment after successful submission
      setFormData({});
      setAttachment(null);
      setFileSize("");  // Clear file size display
      setNotDone(false);  // Reset error message
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact Us</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              value={formData.from_name || ""}
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              value={formData.reply_to || ""}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              className="user"
              placeholder="Phone (optional)"
              value={formData.phone || ""}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message || ""}
              onChange={handleChange}
            />
            <div className="file-upload">
              <input
                type="file"
                id="file-input"
                name="attachment"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                style={{ display: 'none' }}  // Hide the default file input
              />
              <button
                type="button"
                className="file-select-button"
                onClick={() => document.getElementById('file-input').click()}  // Trigger file input when button is clicked
              >
                Choose a file
              </button>
              <p className="file-name">
                {attachment ? attachment.name : "No file chosen"}
              </p>
              <p className="file-size-info">Maximum file size: 50MB</p>
            </div>
            <span className="not-done">
              {notDone && "Please fill all required fields."}
            </span>
            <Button type="submit" className="button">
              Send
            </Button>
            <span className="done">
              {done && "Thanks for contacting us! We'll be in touch soon."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
