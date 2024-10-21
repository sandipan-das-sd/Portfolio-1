
// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
// import SEO from "../SEO";
// function AboutCard() {
//   return (
//     <>
//     <SEO 
//         title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
//         description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
//         keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me"
//         canonicalUrl="/"
//       />
    
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hello! I'm <span className="purple">Sandipan Das</span>, a passionate{" "}
//             <strong>Full Stack Developer</strong> from{" "}
//             <span className="purple">West Bengal, India</span>.
//             <br />
//             I recently completed an enriching internship as a{" "}
//             <strong>Full Stack Developer at StudyBloom LLP</strong>, where I gained
//             hands-on experience with the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
//             <br />
//             Currently, I'm pursuing my B.Tech in Computer Science and Engineering from{" "}
//             Future Institute of Engineering and Management (FIEM) in Kolkata (2022-2026).
//             <br />
//             <br />
//             My expertise includes:
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Full Stack Web Development (MERN Stack)
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Responsive Web Design
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> RESTful API Development
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Database Management (MongoDB, MySQL)
//             </li>
//           </ul>
//           <p>
//             When I'm not coding, you can find me:
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs (check out <a href="https://sandipandas.blog" target="_blank" rel="noopener noreferrer">sandipandas.blog</a>)
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling and Exploring New Places
//             </li>
//           </ul>
//           <p style={{ color: "#00ff99" }}>
//             "Striving to build innovative solutions that make a real difference!"
//           </p>
//           <footer className="blockquote-footer">Sandipan Das, Full Stack Developer</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//     </>
//   );
// }

// export default AboutCard;
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import SEO from "../SEO";

function AboutCard() {
  return (
    <>
      <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, AWS, Docker, Kubernetes, and more. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Docker, Kubernetes, West Bengal, Web Developer, App Developer, Freelancer, Near Me ,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
        canonicalUrl="/"
      />
      
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hello! I'm <span className="purple">Sandipan Das</span>, a passionate{" "}
              <strong>Full Stack Developer</strong> from{" "}
              <span className="purple">West Bengal, India</span>.
              <br />
              I recently completed an enriching internship as a{" "}
              <strong>Full Stack Developer at StudyBloom LLP</strong>, where I gained
              hands-on experience with the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js).
              <br />
              I'm currently pursuing my B.Tech in Computer Science and Engineering at{" "}
              Future Institute of Engineering and Management (FIEM) in Kolkata (2022-2026).
              <br />
              <br />
              In addition to my expertise in MERN stack development, I also specialize in:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Mobile App Development (React Native, Expo)
              </li>
              <li className="about-activity">
                <ImPointRight /> Cloud Services (AWS, Google Cloud Platform)
              </li>
              <li className="about-activity">
                <ImPointRight /> Containerization & Orchestration (Docker, Kubernetes)
              </li>
              <li className="about-activity">
                <ImPointRight /> DevOps Practices (CI/CD, Automation)
              </li>
              <li className="about-activity">
                <ImPointRight /> Scalable Backend Solutions (Node.js, Express)
              </li>
              <li className="about-activity">
                <ImPointRight /> API Integration and Development (REST, GraphQL)
              </li>
            </ul>
            <p>
              When I'm not coding, you can find me:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Games
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs (check out <a href="https://sandipandas.blog" target="_blank" rel="noopener noreferrer">sandipandas.blog</a>)
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling and Exploring New Places
              </li>
            </ul>
            <p style={{ color: "#00ff99" }}>
              "Striving to build innovative solutions that make a real difference!"
            </p>
            <footer className="blockquote-footer">Sandipan Das, Full Stack Developer</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutCard;
