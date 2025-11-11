import type { JSX } from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  author?: string;
  type?: string;
  publishedDate?: string;
  modifiedDate?: string;
  robots?: string;
  structuredData?: Record<string, unknown>;
}

interface SeoComponent {
  (props: SeoProps): JSX.Element;
}

/**
 * SEO Component for managing meta tags per page
 * Uses react-helmet-async for dynamic meta tag management
 */
const Seo: SeoComponent = ({
  title = 'PMU Forms - Smart Consent & Aftercare Forms for Permanent Makeup Artists',
  description = 'PMU Forms is the leading digital consent and aftercare solution for permanent makeup artists. Streamline client onboarding, ensure legal compliance, and grow your PMU business with smart digital forms.',
  keywords = 'PMU forms, permanent makeup, consent forms, aftercare, digital forms, PMU artist, eyebrow, eyeliner, lips',
  canonical = 'https://pmuforms.com',
  ogTitle,
  ogDescription,
  ogImage = 'https://pmuforms.com/PMULogo.png',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  author = 'PMU Forms',
  type = 'website',
  publishedDate,
  modifiedDate,
  robots = 'index, follow',
  structuredData,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="PMU Forms" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={ogUrl || canonical} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:creator" content="@pmuforms" />

      {/* Article Meta Tags (if applicable) */}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {author && <meta property="article:author" content={author} />}

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
