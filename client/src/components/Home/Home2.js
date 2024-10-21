
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/myimglogo.jpg";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillFacebook,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="home-about-body">
//               I'm a <b>passionate</b> full-stack web developer with a
//               deep-rooted ambition for <i>coding</i> 💻.
//               <br />
//               <br />
//               My journey into the world of development began with a{" "}
//               <b>fascination</b> for the <i>logic</i> behind the gadgets we use
//               every day 🤖.
//               <br />
//               <br />
//               Understanding that <i>coding is the backbone of technology</i>, I
//               chose this path as my career and life's goal 🚀.
//               <br />
//               <br />
//               My dedication to creating <b>seamless</b>, <b>efficient</b>, and{" "}
//               <b>innovative</b> web applications drives me to constantly learn
//               and evolve in this ever-changing field 🔧.
//               <br />
//               <br />I am fluent in classics like
//               <i>
//                 <b className="purple"> C, Java, Python, and Javascript. </b>
//               </i>
//               <br />
//               <br />
//               My field of interest includes building new &nbsp;
//               <i>
//                 <b className="purple">Web, App, and Cloud Technologies and Products</b> and
//                 exploring areas related to <b className="purple">Blockchain and ML Models.</b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also channel my enthusiasm into developing interactive experiences with{" "}
//               <b className="purple">
//               Artificial intelligence (AI) and Machine learning (ML) 
//               </b>{" "}
//               and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern JavaScript Libraries and Frameworks
//                 </b>
//               </i>
//               &nbsp; such as
//               <i>
//                 <b className="purple"> React.js, Next.js</b>, and{" "}
//                 <b className="purple">TypeScript.</b>
//               </i>
//               <br />
//               <br />
//               I'm particularly intrigued by harnessing the power of data and intelligent algorithms to create smarter and more intuitive applications, utilizing technologies related to data science, predictive modeling, and intelligent automation.
//             </p>
//           </Col>

//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg}  className="img-fluid" alt="avatar" style={{
//                 borderRadius:"50%"
//               }}/>
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="home-about-social">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="home-about-social-links">
//               <li className="social-icons">
//                 <a
//                   href="https://github.com/sandipan-das-sd"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.facebook.com/sandipandas03"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <AiFillFacebook />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.linkedin.com/in/sandipan-das-13968b1b0"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour  home-social-icons"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="social-icons">
//                 <a
//                   href="https://www.instagram.com/sandipan____21/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="icon-colour home-social-icons"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import myImg from "../../Assets/myimglogo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SEO from "../SEO";
function Home2() {
  return (
    <>
    <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me"
        canonicalUrl="/"
      />
    <Container fluid className="home-about-section" id="about">
      <Helmet>
        <title>About Sandipan Das - Full Stack Developer & Tech Innovator</title>
        <meta name="description" content="Sandipan Das is a passionate full-stack web developer specializing in MERN stack, cloud technologies, AI/ML, and blockchain. Explore his expertise and innovative projects." />
        <meta name="keywords" content="Sandipan Das, Full Stack Developer, MERN Stack, React.js, Node.js, Cloud Technologies, AI, ML, Blockchain, Web Development, App Development" />
        <link rel="canonical" href="https://sandipandas.blog/about" />
      </Helmet>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Delivering <span className="purple">Innovative Solutions</span> for Your Business
            </h1>
            <p className="home-about-body">
              As a <b>full-stack web developer</b>, I specialize in creating <i>tailored solutions</i> that drive business growth and enhance user experiences 🚀.
              <br /><br />
              My expertise spans a wide range of technologies, allowing me to build comprehensive, scalable applications that meet your specific needs:
              <br /><br />
              <ul>
                <li><b className="purple">Front-end:</b> React.js, Next.js, Vue.js, Angular, TypeScript</li>
                <li><b className="purple">Back-end:</b> Node.js, Express.js, Django, Ruby on Rails</li>
                <li><b className="purple">Databases:</b> MongoDB, PostgreSQL, MySQL, Redis</li>
                <li><b className="purple">Cloud Platforms:</b> AWS, Google Cloud, Azure, Heroku</li>
                <li><b className="purple">DevOps:</b> Docker, Kubernetes, Jenkins, GitLab CI/CD</li>
                <li><b className="purple">Emerging Tech:</b> Blockchain (Ethereum, Solidity), AI/ML (TensorFlow, PyTorch)</li>
              </ul>
              <br />
              I'm passionate about leveraging <b className="purple">cutting-edge technologies</b> to solve complex business challenges and create competitive advantages for my clients.
              <br /><br />
              Whether you need a <i>responsive web application</i>, a <i>robust mobile app</i>, or an <i>AI-powered solution</i>, I have the skills and experience to bring your vision to life.
              <br /><br />
              Let's collaborate to create innovative, efficient, and scalable digital solutions that propel your business forward in the digital age.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Sandipan Das - Full Stack Developer" style={{
                borderRadius: "50%"
              }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>Connect with Me</h2>
            <p>
              Let's discuss how I can help <span className="purple">transform your ideas into reality</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sandipan-das-sd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub Profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sandipandas03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Facebook Profile"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandipan-das-13968b1b0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sandipan____21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram Profile"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Home2;