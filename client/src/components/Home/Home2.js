import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b>passionate</b> full-stack web developer with a
              deep-rooted ambition for <i>coding</i> 💻.
              <br />
              <br />
              My journey into the world of development began with a{" "}
              <b>fascination</b> for the <i>logic</i> behind the gadgets we use
              every day 🤖.
              <br />
              <br />
              Understanding that <i>coding is the backbone of technology</i>, I
              chose this path as my career and life's goal 🚀.
              <br />
              <br />
              My dedication to creating <b>seamless</b>, <b>efficient</b>, and{" "}
              <b>innovative</b> web applications drives me to constantly learn
              and evolve in this ever-changing field 🔧.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Java, Python, and Javascript. </b>
              </i>
              <br />
              <br />
              My field of interest includes building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b> and
                exploring areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with{" "}
              <b className="purple">
                Python Game Development (using Pygame)
              </b>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Next.js</b>, and{" "}
                <b className="purple">TypeScript.</b>
              </i>
              <br />
              <br />
              <p>
                I also work extensively in{" "}
                <b>
                  <i className="purple">Graphic Design</i>
                </b>{" "}
                using <b className="purple">Canva</b>, where I create a variety
                of designs, like{" "}
                <i className="purple">certificates, banner design, Poster.</i>
              </p>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Soumadip-cmd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://facebook.com/SoumadipSantra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumadip-santra-121024258"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am_souma7889/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
