// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/lms.png";
// import emotion from "../../Assets/Projects/qrcode.png";
// import editor from "../../Assets/Projects/ems.png";
// import chatify from "../../Assets/Projects/chatapp.png";
// import suicide from "../../Assets/Projects/merncrafters.png";
// import bitsOfCode from "../../Assets/Projects/sports.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="ChatApp"
//               description="A real-time chat application built using React.js, Node.js, Express, and MongoDB, styled with Tailwind CSS. This app enables seamless communication with features like instant messaging, user authentication, online status indicators, and real-time notifications. Leveraging Socket.IO, it ensures fast and reliable message delivery. The app's intuitive interface, powered by Tailwind CSS, offers an engaging user experience, making it easy to connect with friends and colleagues."
//               ghLink="https://github.com/sandipan-das-sd/ChatApp.git"
//               demoLink="https://chat-app-psi-three-33.vercel.app/" 
//           />
//           </Col>

//           <Col md={4} className="project-card">
//           <ProjectCard
//               imgPath={bitsOfCode} 
//               isBlog={false}
//               title="Sports Web App"
//               description="Developed a Sports Web App that provides comprehensive information about various sports, including news, scores, and player stats. The app features a modern UI and offers a responsive design for an optimal viewing experience on any device. This Web APP is particular for A speiicf client only"
//               ghLink="https://github.com/sandipan-das-sd/SportsWeb"
//               demoLink="https://sports-web-eta.vercel.app/"
//             />

//           </Col>

//           <Col md={4} className="project-card">
//           <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Employee Management System"
//               description="A comprehensive Employee Management System built using React.js, Node.js, Express, and MongoDB. This application provides functionalities to manage employee data, including adding, updating, and deleting employee records. It also features a dashboard for viewing employee details, search and filter options, and role-based access control. The system is designed to streamline HR tasks, making it easier to handle employee information efficiently and securely."
//               ghLink="https://github.com/Soumadip-cmd/Employee--Management-.git"
//               demoLink="https://employee-management-sb5z.vercel.app/"
//             />

//           </Col>

//           <Col md={4} className="project-card">
//           <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Learning Management System App"
//               description="An educational app designed to enhance learning experiences using interactive content. Built using modern web technologies, this app provides users with engaging lessons, quizzes, and resources to support a variety of educational topics. (GitHub and demo links are not available due to privacy concerns.)"
//               ghLink=""
//               demoLink=""
//             />


//           </Col>

//           <Col md={4} className="project-card">
//           <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="MERN Crafters Company Website"
//               description="A company website built using HTML, CSS, JavaScript, and Bootstrap. This project showcases modern web design and responsive layout techniques to create an engaging and professional online presence."
//               ghLink="https://github.com/sandipan-das-sd/MernCrafters.git"
//               demoLink="https://sandipan-das-sd.github.io/MernCrafters/"
//             />

//           </Col>

//           <Col md={4} className="project-card">
//           <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="QR Code Generator"
//               description="Developed a QR Code Generator application using a CNN classifier trained on the 'FER-2013 dataset' with Keras and TensorFlow. The classifier achieved an accuracy of 60.1% in emotion detection. Integrated OpenCV for face detection, allowing the application to predict human emotions from images. The demo showcases the QR code generation functionality."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               demoLink="https://sandipan-das-sd.github.io/qr_code_generator_sandipan/"
//             />

//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/lms.png";
import emotion from "../../Assets/Projects/qrcode.png";
import editor from "../../Assets/Projects/ems.png";
import chatify from "../../Assets/Projects/chatapp.png";
import suicide from "../../Assets/Projects/merncrafters.png";
import bitsOfCode from "../../Assets/Projects/sports.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Sandipan Das - Innovative Web Development Projects</title>
        <meta name="description" content="Explore Sandipan Das's portfolio of cutting-edge web development projects. From real-time chat applications to employee management systems, discover how these solutions can benefit your business." />
        <meta name="keywords" content="Sandipan Das, Web Developer, React.js, Node.js, MongoDB, MERN Stack, Chat Application, Employee Management System, Sports Web App,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development" />
        <link rel="canonical" href="https://sandipandas.blog/projects" />
      </Helmet>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Innovative <strong className="purple">Solutions </strong> for Your Business
        </h1>
        <p style={{ color: "white" }}>
          Discover how these projects can be tailored to meet your specific business needs.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Real-Time Communication Solution"
              description="Enhance your business communication with this real-time chat application. Built using React.js, Node.js, Express, and MongoDB, it offers instant messaging, user authentication, and real-time notifications. Ideal for improving team collaboration and customer support."
              ghLink="https://github.com/sandipan-das-sd/ChatApp.git"
              demoLink="https://chat-app-psi-three-33.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode} 
              isBlog={false}
              title="Custom Sports Information Platform"
              description="Engage your audience with a comprehensive sports information platform. This responsive web app delivers real-time news, scores, and player stats, perfect for sports-related businesses or media companies looking to provide value to their customers."
              ghLink="https://github.com/sandipan-das-sd/SportsWeb"
              demoLink="https://sports-web-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Streamlined HR Management Solution"
              description="Optimize your HR processes with this comprehensive Employee Management System. Built on the MERN stack, it offers secure employee data management, role-based access control, and powerful search capabilities. Ideal for businesses looking to improve their HR efficiency."
              ghLink="https://github.com/Soumadip-cmd/Employee--Management-.git"
              demoLink="https://employee-management-sb5z.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Customizable E-Learning Platform"
              description="Revolutionize your training programs with this adaptable Learning Management System. Featuring interactive content and progress tracking, it's perfect for businesses seeking to enhance employee skills or educational institutions looking to offer online courses."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Professional Company Website Template"
              description="Establish a strong online presence with this modern, responsive company website. Built using HTML, CSS, JavaScript, and Bootstrap, it's easily customizable to reflect your brand identity and showcase your products or services effectively."
              ghLink="https://github.com/sandipan-das-sd/MernCrafters.git"
              demoLink="https://sandipan-das-sd.github.io/MernCrafters/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Advanced QR Code Solution"
              description="Enhance your marketing or inventory management with this sophisticated QR Code Generator. Leveraging machine learning for additional features like emotion detection, this tool can be customized for various business applications, from product tracking to interactive marketing campaigns."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://sandipan-das-sd.github.io/qr_code_generator_sandipan/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;