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

function ProjectCards(props) {
  return (
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
  );
}

export default ProjectCards;