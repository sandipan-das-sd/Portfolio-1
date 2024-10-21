import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <Container className="mt-5 pt-5">
      <Helmet>
        <title>Privacy Policy - Sandipan Das</title>
        <meta name="description" content="Privacy Policy for Sandipan Das's portfolio website" />
      </Helmet>
      <Row>
        <Col md={12}>
          <h1 className="mb-4">Privacy Policy</h1>
          <p>Last updated: October 21, 2024</p>
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit sandipandas.blog (the "Site").</p>
          
          <h2>Personal Information We Collect</h2>
          <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
          
          <h2>How We Use Your Personal Information</h2>
          <p>We use the information that we collect generally to optimize our Site and understand user preferences. Additionally, we may use this information to:</p>
          <ul>
            <li>Communicate with you</li>
            <li>Screen for potential risk or fraud</li>
            <li>Provide you with information or advertising relating to our products or services</li>
          </ul>
          
          <h2>Sharing Your Personal Information</h2>
          <p>We do not share your Personal Information with third parties except as described in this Privacy Policy.</p>
          
          <h2>Changes</h2>
          <p>We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal or regulatory reasons.</p>
          
          <h2>Contact Us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at sd901656@gmail.com.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;