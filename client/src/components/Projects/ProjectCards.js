// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { ImOpt } from "react-icons/im";
import SEO from "../SEO";
function ProjectCards(props) {
  return (
    <>
    <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me,Web development,Mobile app development,Custom web apps,Responsive design,Cross-platform apps,Front-end development,Back-end development,Mobile UI/UX,Native apps,Hybrid apps,Web development company,Mobile development services,Full-stack development,Web technologies,Mobile technologies,App development agency,Web solutions,Mobile solutions,Web design and development,Mobile app design and development"
        canonicalUrl="/"
      />
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} - Project by Sandipan Das`} />
      <Card.Body>
        <Card.Title as="h2">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${props.title} on GitHub`}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Source Code"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${props.title}`}
            >
              <CgWebsite /> &nbsp;
              Live Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default ProjectCards;