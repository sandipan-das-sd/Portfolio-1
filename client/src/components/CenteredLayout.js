// import React from 'react';
// import { Container } from 'react-bootstrap';

// const CenteredLayout = ({ children }) => {
//   return (
//     <div 
//       style={{
//         minHeight: '100vh',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f0f0f0', // Light gray background
//       }}
//     >
//       <Container>
//         <div 
//           style={{
//             backgroundColor: 'white',
//             padding: '2rem',
//             borderRadius: '8px',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           {children}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CenteredLayout;
import React from 'react';
import { motion } from 'framer-motion';

const CenteredLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-4"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CenteredLayout;