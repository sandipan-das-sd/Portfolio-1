import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error404 = () => {
  return (
    <Container className="mt-5 pt-5 text-center">
      <Helmet>
        <title>404 - Page Not Found | Sandipan Das</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to Sandipan Das's portfolio." />
      </Helmet>
      <Row className="justify-content-center">
        <Col md={8}>
          <FaExclamationTriangle size={100} className="text-warning mb-4" />
          <h1 className="display-4 mb-4">Oops! Page Not Found</h1>
          <p className="lead mb-4">
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </p>
          <Button as={Link} to="/" variant="primary" size="lg">
            Go Back to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;