// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple"> Sandipan Das </span>
//             from <span className="purple"> West Bengal, India.</span>
//             <br />
//             I am currently employed as a software developer intern at Study Boom LLP.
//             <br />
//             I am pursuing B.Tech in Computer Science and Engineering from 
//             Future Institute Of Engineering and Manegment(FIEM) Kolkata
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "#00ff99" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Sandipan</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
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
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me"
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
            Currently, I'm pursuing my B.Tech in Computer Science and Engineering from{" "}
            Future Institute of Engineering and Management (FIEM) in Kolkata.
            <br />
            <br />
            My expertise includes:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Web Development (MERN Stack)
            </li>
            <li className="about-activity">
              <ImPointRight /> Responsive Web Design
            </li>
            <li className="about-activity">
              <ImPointRight /> RESTful API Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Database Management (MongoDB, MySQL)
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