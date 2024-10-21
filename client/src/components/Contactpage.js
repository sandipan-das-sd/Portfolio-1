import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Container className="mt-5 pt-5">
      <Helmet>
        <title>Contact - Sandipan Das</title>
        <meta name="description" content="Contact Sandipan Das - Full Stack Developer" />
      </Helmet>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Contact Me</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
          <div className="mt-4 text-center">
            <p>Or contact me directly:</p>
            <p>Email: sd901656@gmail.com</p>
            <p>Phone: +918335019404</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;