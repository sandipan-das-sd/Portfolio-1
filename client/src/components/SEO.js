import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title, description, keywords, canonicalUrl, ogType = "website" }) => {
  const siteUrl = "https://sandipandas.blog"; // Replace with your actual domain
  const fullUrl = `${siteUrl}${canonicalUrl}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${title}",
            "description": "${description}",
            "url": "${fullUrl}"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;