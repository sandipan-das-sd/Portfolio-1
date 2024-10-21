// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Helmet } from 'react-helmet';
// import emailjs from 'emailjs-com';
// import CenteredLayout from './CenteredLayout';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//           alert('Message sent successfully!');
//           setFormData({ name: '', email: '', message: '' });
//       }, (error) => {
//           console.log(error.text);
//           alert('Failed to send message. Please try again.');
//       });
//   };

//   return (
//    <CenteredLayout>
//     <Container className="mt-5 pt-5">
//       <Helmet>
//         <title>Contact - Sandipan Das</title>
//         <meta name="description" content="Contact Sandipan Das - Full Stack Developer" />
//       </Helmet>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <h1 className="text-center mb-4">Contact Me</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={5}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">
//               Send Message
//             </Button>
//           </Form>
//           <div className="mt-4 text-center">
//             <p>Or contact me directly:</p>
//             <p>Email: sd901656@gmail.com</p>
//             <p>Phone: +918335019404</p>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     </CenteredLayout>
//   );
// };

// export default Contact;
// Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import './Contact.css';
import SEO from './SEO';
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
        canonicalUrl="/"
      />
    <div className="contact-container mt-5">
      <Helmet>
        <title>Contact - Sandipan Das</title>
        <meta name="description" content="Contact Sandipan Das - Full Stack Developer" />
      </Helmet>
      <motion.div 
        className="contact-form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="contact-title">Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </motion.div>
          <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </motion.div>
          <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <FaComment className="input-icon" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="submit-button"
          >
            <FaPaperPlane className="button-icon" />
            Send Message
          </motion.button>
        </form>
        <div className="contact-info">
          <p>Or contact me directly:</p>
          <p>Email: sd901656@gmail.com</p>
          <p>Phone: +918335019404</p>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Contact;

// Contact.css
