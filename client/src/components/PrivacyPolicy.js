
import React from 'react';
import SharedPolicyLayout from './SharedPolicyLayout';

const PrivacyPolicy = () => {
  const styles = {
    title: {
      fontSize: '2.5rem',
      color: '#2c3e50',
      marginBottom: '1.5rem',
      borderBottom: '2px solid #3498db',
      paddingBottom: '0.5rem',
    },
    lastUpdated: {
      fontSize: '0.9rem',
      color: '#7f8c8d',
      marginBottom: '2rem',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#34495e',
      marginBottom: '1.5rem',
    },
    heading: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginTop: '2.5rem',
      marginBottom: '1rem',
    },
    list: {
      marginBottom: '1.5rem',
      paddingLeft: '2rem',
    },
    listItem: {
      marginBottom: '0.5rem',
    },
  };

  return (
    <SharedPolicyLayout 
      title="Privacy Policy"
      description="Privacy Policy for Sandipan Das's portfolio website"
    >
      <h1 style={styles.title}>Privacy Policy</h1>
      <p style={styles.lastUpdated}>Last updated: October 21, 2024</p>
      <p style={styles.paragraph}>This Privacy Policy describes how your personal information is collected, used, and shared when you visit sandipandas.blog (the "Site").</p>
      
      <h2 style={styles.heading}>Personal Information We Collect</h2>
      <p style={styles.paragraph}>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
      
      <h2 style={styles.heading}>How We Use Your Personal Information</h2>
      <p style={styles.paragraph}>We use the information that we collect generally to optimize our Site and understand user preferences. Additionally, we may use this information to:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Communicate with you</li>
        <li style={styles.listItem}>Screen for potential risk or fraud</li>
        <li style={styles.listItem}>Provide you with information or advertising relating to our products or services</li>
      </ul>
      
      <h2 style={styles.heading}>Sharing Your Personal Information</h2>
      <p style={styles.paragraph}>We do not share your Personal Information with third parties except as described in this Privacy Policy.</p>
      
      <h2 style={styles.heading}>Changes</h2>
      <p style={styles.paragraph}>We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal or regulatory reasons.</p>
      
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.paragraph}>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at sd901656@gmail.com.</p>
    </SharedPolicyLayout>
  );
};

export default PrivacyPolicy;
