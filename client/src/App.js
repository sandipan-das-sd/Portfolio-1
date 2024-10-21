// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [load, updateLoad] = useState(true); // Fixed typo here

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       updateLoad(false); // Fixed typo here
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <Navbar />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/project" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="*" element={<Navigate to="/"/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Contact from "./components/Contactpage";
import Error404 from "./components/Error";

// SEO-enhanced Layout component
const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>Sandipan Das - Full Stack Developer | Web & App Developer</title>
      <meta name="description" content="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal" />
      <meta name="keywords" content="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development" />
      <meta name="author" content="Sandipan Das" />
      <link rel="canonical" href="https://sandipandas.blog" />
      <meta property="og:title" content="Sandipan Das - Full Stack Developer Portfolio" />
      <meta property="og:description" content="Explore the projects and skills of Sandipan Das, a full stack developer specializing in web and app development using MERN stack and modern technologies." />
      <meta property="og:url" content="https://sandipandas.blog" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sandipan Das - Full Stack Developer Portfolio" />
      <meta name="twitter:description" content="Discover the innovative web and app solutions created by Sandipan Das, a skilled full stack developer with expertise in MERN stack and modern web technologies." />
    </Helmet>
    <Navbar />
    <ScrollToTop />
    {children}
    <Footer />
  </>
);

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/project" element={<Layout><Projects /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/resume" element={<Layout><Resume /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy/></Layout>} />
          <Route path="/terms-of-service" element={<Layout><TermsOfService/></Layout>} />
          <Route path="/contact" element={<Layout><Contact/></Layout>} />
          <Route path="*" element={<Layout><Error404/></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;