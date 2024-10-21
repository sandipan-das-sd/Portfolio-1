import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaBrain } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,

  
  SiMysql,
  SiSocketdotio,
  SiExpo,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMaterialdesign,
  SiChakraui,
  SiTypescript,
  SiApifox,
} from "react-icons/si";
import SEO from "../SEO";

function Techstack() {

  return (
    <>
    <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
        canonicalUrl="/"
      />
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApifox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBrain />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
