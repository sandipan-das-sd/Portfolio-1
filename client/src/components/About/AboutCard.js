import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sandipan Das </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently employed as a software developer intern at Study Boom LLP.
            <br />
            I am pursuing B.Tech in Computer Science and Engineering from 
            Future Institute Of Engineering and Manegment(FIEM) Kolkata
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#00ff99" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sandipan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
