
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Helmet } from 'react-helmet';
// import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
// import axios from 'axios'; // Make sure to install axios: npm install axios
// import './Contact.css';
// import SEO from './SEO';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/contact/submit', formData);
//       console.log('Form submitted:', response.data);
//       setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
//       setFormData({ name: '', email: '', message: '' }); // Clear form
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
//         description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
//         keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
//         canonicalUrl="/"
//       />
//       <div className="contact-container mt-5">
//         <Helmet>
//           <title>Contact - Sandipan Das</title>
//           <meta name="description" content="Contact Sandipan Das - Full Stack Developer" />
//         </Helmet>
//         <motion.div
//           className="contact-form-container"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="contact-title">Contact Me</h1>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <FaUser className="input-icon" />
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//               />
//             </motion.div>
//             <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <FaEnvelope className="input-icon" />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your Email"
//                 required
//               />
//             </motion.div>
//             <motion.div className="form-group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <FaComment className="input-icon" />
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//               ></textarea>
//             </motion.div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="submit-button"
//               disabled={isSubmitting}
//             >
//               <FaPaperPlane className="button-icon" />
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </motion.button>
//           </form>
//           {submitStatus && (
//             <div className={`submit-status ${submitStatus.type}`}>
//               {submitStatus.message}
//             </div>
//           )}
//           <div className="contact-info">
//             <p>Or contact me directly:</p>
//             <p>Email: sd901656@gmail.com</p>
//             <p>Phone: +918335019404</p>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import SEO from './SEO';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://portfolio-1-5jex.onrender.com/api/v1/contact/submit', formData);
      console.log('Form submitted:', response.data);
      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
        canonicalUrl="/"
      />
      <ToastContainer />
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
              disabled={isSubmitting}
            >
              <FaPaperPlane className="button-icon" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
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