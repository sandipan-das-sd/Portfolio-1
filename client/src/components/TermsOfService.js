import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  return (
    <Container className="mt-5 pt-5">
      <Helmet>
        <title>Terms of Service - Sandipan Das</title>
        <meta name="description" content="Terms of Service for Sandipan Das's portfolio website" />
      </Helmet>
      <Row>
        <Col md={12}>
          <h1 className="mb-4">Terms of Service</h1>
          <p>Last updated: October 21, 2024</p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the sandipandas.blog website (the "Service") operated by Sandipan Das ("us", "we", or "our").</p>
          
          <h2>1. Terms</h2>
          <p>By accessing the website at sandipandas.blog, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Sandipan Das's website for personal, non-commercial transitory viewing only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The materials on Sandipan Das's website are provided on an 'as is' basis. Sandipan Das makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall Sandipan Das or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sandipan Das's website.</p>
          
          <h2>5. Revisions and Errata</h2>
          <p>The materials appearing on Sandipan Das's website could include technical, typographical, or photographic errors. Sandipan Das does not warrant that any of the materials on its website are accurate, complete or current.</p>
          
          <h2>6. Links</h2>
          <p>Sandipan Das has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sandipan Das of the site. Use of any such linked website is at the user's own risk.</p>
          
          <h2>7. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at sd901656@gmail.com.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsOfService;