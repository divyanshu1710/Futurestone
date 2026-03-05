import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setDone(false)
        setNotDone(false)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true)
        } else {
            emailjs
                .sendForm(
                    "service_y7qex8l",
                    "template_qy7zcei",
                    form.current,
                    "eWTYeMg0SKP0ut_rR"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setDone(true);
                        setFormData({});
                        form.current.reset();
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form-modern">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="form-input"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.from_name || ''}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="reply_to"
                    className="form-input"
                    placeholder="your@email.com"
                    onChange={handleChange}
                    value={formData.reply_to || ''}
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                    onChange={handleChange}
                    value={formData.message || ''}
                    rows="6"
                />
            </div>

            {notDone && <div className="form-error">Please fill in all fields</div>}
            {done && <div className="form-success">Thank you! We'll be in touch soon.</div>}

            <Button type="submit" className="btn-submit" disabled={done}>
                {done ? 'Message Sent ✓' : 'Send Message'}
            </Button>
        </form>
    )
};

export default Contact

