// import React from 'react';
// import { Container } from 'react-bootstrap';
// import { Helmet } from 'react-helmet';

// const SharedPolicyLayout = ({ children, title, description }) => {
//   const styles = {
//     container: {
//       minHeight: '100vh',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//       padding: '40px 20px',
//     },
//     content: {
//       background: 'rgba(255, 255, 255, 0.95)',
//       borderRadius: '12px',
//       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//       padding: '40px',
//       maxWidth: '800px',
//       margin: '0 auto',
//       width: '100%',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <Helmet>
//         <title>{title} - Sandipan Das</title>
//         <meta name="description" content={description} />
//       </Helmet>
//       <Container>
//         <div style={styles.content}>
//           {children}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SharedPolicyLayout;
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SEO from './SEO';
const SharedPolicyLayout = ({ children, title, description, keywords }) => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 20px',
    },
    content: {
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      width: '100%',
    },
    heading: {
      marginBottom: '20px',
    },
  };

  const fullTitle = `${title} - Sandipan Das`;

  return (
    <>
    <SEO 
        title="Sandipan Das - Full Stack Developer | MERN Expert in Barrackpore"
        description="Sandipan Das, a skilled Full Stack Developer from Barrackpore, specializing in MERN stack, React Native, and AWS cloud solutions. Offering expert web and app development services in West Bengal."
        keywords="Sandipan Das, Full Stack Developer, MERN Stack, React Native, AWS, Barrackpore, Shyamnagar, West Bengal, Web Developer, App Developer, Freelancer, Near Me"
        canonicalUrl="/"
      />
    <div style={styles.container}>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://sandipandas.blog/${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>
      <Container>
        <main style={styles.content}>
        
          {children}
        </main>
      </Container>
    </div>
    </>
  );
};

export default SharedPolicyLayout;