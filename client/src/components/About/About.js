// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Particle />
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
//               Know Who <strong className="purple">I'M</strong>
//             </h1>
//             <Aboutcard />
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img src={laptopImg} alt="about" className="img-fluid" />
//           </Col>
//         </Row>
//         <h1 className="project-heading">
//           Professional <strong className="purple">Skillset </strong>
//         </h1>

//         <Techstack />

//         <h1 className="project-heading">
//           <strong className="purple">Tools</strong> I use
//         </h1>
//         <Toolstack />

        
//       </Container>
//     </Container>
//   );
// }

// export default About;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Helmet>
        <title>About Me | Full Stack Developer | MERN Stack Expert</title>
        <meta name="description" content="Learn about my journey as a Full Stack Developer specializing in MERN stack, React.js, and cloud technologies. Discover my professional skillset and the cutting-edge tools I use to create innovative web solutions." />
        <meta name="keywords" content="Full Stack Developer, MERN Stack, React.js, Node.js, MongoDB, Express.js, AWS, Web Development, App Development" />
        <link rel="canonical" href="https://sandipandas.blog/about" />
      </Helmet>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
            <p>
              As a passionate Full Stack Developer, I specialize in building robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a strong foundation in both front-end and back-end technologies, I create seamless user experiences while ensuring efficient server-side operations.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="Full Stack Developer workspace" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <p>
          My expertise spans across various technologies and frameworks, enabling me to tackle complex projects with confidence and innovation. From responsive front-end designs to robust back-end architectures, I deliver comprehensive solutions that meet and exceed client expectations.
        </p>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <p>
          To stay at the forefront of web development, I leverage a suite of modern tools and platforms. These enable me to streamline development processes, enhance collaboration, and deliver high-quality, maintainable code.
        </p>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;