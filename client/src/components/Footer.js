// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillFacebook,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Footer() {
//   let date = new Date();
//   let year = date.getFullYear();
//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="4" className="footer-copywright">
//           <h3>Designed and Developed by Sandipan Das</h3>
//         </Col>
//         <Col md="4" className="footer-copywright">
//           <h3>▨ Copyright © {year} Sandipan Das.</h3>
//         </Col>
//         <Col md="4" className="footer-body">
//           <ul className="footer-icons">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/sandipan-das-sd"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.facebook.com/sandipandas03/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillFacebook/>
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/sandipan-das-13968b1b0"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/sandipan____21/"
//                 style={{ color: "white" }}
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Navbar.css'
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h3 className="font-weight-bold">
              Innovating Web Solutions
            </h3>
            <p className="mb-0">Full Stack Developer | MERN Specialist</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <p className="mb-0">
              © {year} Sandipan Das | All Rights Reserved
            </p>
            <p className="mb-0">
              <a href="/privacy-policy" className="text-light">Privacy Policy</a> | 
              <a href="/terms-of-service" className="text-light"> Terms of Service</a>
            </p>
          </Col>
          <Col md={4}>
            <ul className="list-inline text-center text-md-right mb-0">
              <li className="list-inline-item">
                <a
                  href="https://github.com/sandipan-das-sd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="social-icon"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/sandipandas03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="social-icon"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/sandipan-das-13968b1b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/sandipan____21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="social-icon"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;