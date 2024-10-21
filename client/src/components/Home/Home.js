// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> Sandipan Das</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Helmet } from "react-helmet";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Helmet>
//         <title>Sandipan Das - Full Stack Developer | Web & App Development Expert</title>
//         <meta name="description" content="Sandipan Das is a skilled Full Stack Developer specializing in MERN stack, web and app development. Explore my portfolio, projects, and expertise in creating innovative digital solutions." />
//         <meta name="keywords" content="Sandipan Das, Full Stack Developer, Web Developer, App Developer, MERN Stack, React.js, Node.js, MongoDB, Express.js, JavaScript, HTML, CSS, Portfolio" />
//         <meta name="author" content="Sandipan Das" />
//         <link rel="canonical" href="https://sandipandas.blog" />
//         <script type="application/ld+json">
//           {`
//             {
//               "@context": "http://schema.org",
//               "@type": "Person",
//               "name": "Sandipan Das",
//               "jobTitle": "Full Stack Developer",
//               "url": "https://sandipandas.blog",
//               "sameAs": [
//                 "https://github.com/sandipan-das-sd",
//                 "https://www.linkedin.com/in/sandipan-das-13968b1b0/"
//               ]
//             }
//           `}
//         </script>
//       </Helmet>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             <Col md={7} className="home-header">
//               {/* <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Welcome to My Portfolio{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1> */}
//               <h1 className="heading-name">
//                 I'm{" "}
//                 <strong className="main-name">Sandipan Das</strong>
//               </h1>
//               <h2 className="heading-description">Full Stack Developer | Web & App Development Expert</h2>
//               <div style={{ padding: 10, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>
//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="Sandipan Das - Full Stack Developer"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

const ModernTitle = () => (
  <div className="modern-title-container">
    <h1 className="modern-title">
      <span className="name">Sandipan Das</span>
      <span className="role">Full Stack Developer</span>
      <span className="specialty">Web & App Expert</span>
    </h1>
  </div>
);

function Home() {
  return (
    <section>
      <Helmet>
        <title>Sandipan Das - Full Stack Developer | Web & App Development Expert</title>
        <meta name="description" content="Sandipan Das is a skilled Full Stack Developer specializing in MERN stack, web and app development. Explore my portfolio, projects, and expertise in creating innovative digital solutions." />
        <meta name="keywords" content="Sandipan Das, Full Stack Developer, Web Developer, App Developer, MERN Stack, React.js, Node.js, MongoDB, Express.js, JavaScript, HTML, CSS, Portfolio" />
        <meta name="author" content="Sandipan Das" />
        <link rel="canonical" href="https://sandipandas.blog" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Sandipan Das",
              "jobTitle": "Full Stack Developer",
              "url": "https://sandipandas.blog",
              "sameAs": [
                "https://github.com/sandipan-das-sd",
                "https://www.linkedin.com/in/sandipan-das-13968b1b0/"
              ]
            }
          `}
        </script>
        <style>
          {`
            .modern-title-container {
              font-family: 'Roboto', sans-serif;
              margin-bottom: 20px;
              position: relative;
              overflow: hidden;
            }
            .modern-title {
              display: inline-block;
              background: linear-gradient(120deg, #2196F3, #4CAF50, #FF9800);
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              position: relative;
              z-index: 1;
            }
            .modern-title::after {
              content: '';
              position: absolute;
              left: 0;
              bottom: -2px;
              width: 100%;
              height: 2px;
              background: linear-gradient(120deg, #2196F3, #4CAF50, #FF9800);
              transform: scaleX(0);
              transition: transform 0.3s ease-in-out;
            }
            .modern-title:hover::after {
              transform: scaleX(1);
            }
            .modern-title .name {
              display: block;
              font-size: 2.5em;
              font-weight: 700;
              letter-spacing: 1px;
            }
            .modern-title .role {
              display: block;
              font-size: 1.2em;
              font-weight: 400;
              margin-top: -5px;
            }
            .modern-title .specialty {
              display: block;
              font-size: 0.9em;
              font-weight: 300;
              margin-top: -2px;
            }
            @media (max-width: 768px) {
              .modern-title .name {
                font-size: 2em;
              }
              .modern-title .role {
                font-size: 1em;
              }
              .modern-title .specialty {
                font-size: 0.8em;
              }
            }
          `}
        </style>
      </Helmet>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <ModernTitle />
              <div style={{ padding: 10, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Sandipan Das - Full Stack Developer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;