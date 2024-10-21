
// import React from 'react';
// import SharedPolicyLayout from './SharedPolicyLayout';

// const TermsOfService = () => {
//   return (
//     <SharedPolicyLayout 
//       title="Terms of Service"
//       description="Terms of Service for Sandipan Das's portfolio website"
//     >
//       <h1 className="mb-4">Terms of Service</h1>
//       <p className="text-muted small mb-4">Last updated: October 21, 2024</p>
//       <p className="mb-4">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the sandipandas.blog website (the "Service") operated by Sandipan Das ("us", "we", or "our").</p>
      
//       <h2 className="h4 mt-5 mb-3">1. Terms</h2>
//       <p className="mb-4">By accessing the website at sandipandas.blog, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
      
//       <h2 className="h4 mt-5 mb-3">2. Use License</h2>
//       <p className="mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Sandipan Das's website for personal, non-commercial transitory viewing only.</p>
      
//       <h2 className="h4 mt-5 mb-3">3. Disclaimer</h2>
//       <p className="mb-4">The materials on Sandipan Das's website are provided on an 'as is' basis. Sandipan Das makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      
//       <h2 className="h4 mt-5 mb-3">4. Limitations</h2>
//       <p className="mb-4">In no event shall Sandipan Das or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sandipan Das's website.</p>
      
//       <h2 className="h4 mt-5 mb-3">5. Revisions and Errata</h2>
//       <p className="mb-4">The materials appearing on Sandipan Das's website could include technical, typographical, or photographic errors. Sandipan Das does not warrant that any of the materials on its website are accurate, complete or current.</p>
      
//       <h2 className="h4 mt-5 mb-3">6. Links</h2>
//       <p className="mb-4">Sandipan Das has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sandipan Das of the site. Use of any such linked website is at the user's own risk.</p>
      
//       <h2 className="h4 mt-5 mb-3">7. Governing Law</h2>
//       <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
      
//       <h2 className="h4 mt-5 mb-3">Contact Us</h2>
//       <p className="mb-4">If you have any questions about these Terms, please contact us at sd901656@gmail.com.</p>
//     </SharedPolicyLayout>
//   );
// };

// export default TermsOfService;
import React from 'react';
import SharedPolicyLayout from './SharedPolicyLayout';

const TermsOfService = () => {
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
  };

  return (
    <SharedPolicyLayout 
      title="Terms of Service"
      description="Terms of Service for Sandipan Das's portfolio website"
    >
      <h1 style={styles.title}>Terms of Service</h1>
      <p style={styles.lastUpdated}>Last updated: October 21, 2024</p>
      <p style={styles.paragraph}>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the sandipandas.blog website (the "Service") operated by Sandipan Das ("us", "we", or "our").</p>
      
      <h2 style={styles.heading}>1. Terms</h2>
      <p style={styles.paragraph}>By accessing the website at sandipandas.blog, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
      
      <h2 style={styles.heading}>2. Use License</h2>
      <p style={styles.paragraph}>Permission is granted to temporarily download one copy of the materials (information or software) on Sandipan Das's website for personal, non-commercial transitory viewing only.</p>
      
      <h2 style={styles.heading}>3. Disclaimer</h2>
      <p style={styles.paragraph}>The materials on Sandipan Das's website are provided on an 'as is' basis. Sandipan Das makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      
      <h2 style={styles.heading}>4. Limitations</h2>
      <p style={styles.paragraph}>In no event shall Sandipan Das or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sandipan Das's website.</p>
      
      <h2 style={styles.heading}>5. Revisions and Errata</h2>
      <p style={styles.paragraph}>The materials appearing on Sandipan Das's website could include technical, typographical, or photographic errors. Sandipan Das does not warrant that any of the materials on its website are accurate, complete or current.</p>
      
      <h2 style={styles.heading}>6. Links</h2>
      <p style={styles.paragraph}>Sandipan Das has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sandipan Das of the site. Use of any such linked website is at the user's own risk.</p>
      
      <h2 style={styles.heading}>7. Governing Law</h2>
      <p style={styles.paragraph}>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocibly submit to the exclusive jurisdiction of the courts in that State or location.</p>
      
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.paragraph}>If you have any questions about these Terms, please contact us at sd901656@gmail.com.</p>
    </SharedPolicyLayout>
  );
};

export default TermsOfService;