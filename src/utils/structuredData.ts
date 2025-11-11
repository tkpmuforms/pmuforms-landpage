// /**
//  * Structured Data (Schema.org/JSON-LD) utilities for SEO
//  */

// export interface OrganizationSchema {
//   '@context': string;
//   '@type': string;
//   name: string;
//   url: string;
//   logo: string;
//   description: string;
//   sameAs: string[];
//   address?: {
//     '@type': string;
//     streetAddress: string;
//     addressLocality: string;
//     addressRegion: string;
//     postalCode: string;
//     addressCountry: string;
//   };
//   contactPoint?: {
//     '@type': string;
//     contactType: string;
//     telephone: string;
//     email: string;
//   };
// }

// export interface BreadcrumbSchema {
//   '@context': string;
//   '@type': string;
//   itemListElement: Array<{
//     '@type': string;
//     position: number;
//     name: string;
//     item: string;
//   }>;
// }

// export interface ArticleSchema {
//   '@context': string;
//   '@type': string;
//   headline: string;
//   description: string;
//   image: string;
//   datePublished: string;
//   dateModified: string;
//   author: {
//     '@type': string;
//     name: string;
//   };
//   publisher: {
//     '@type': string;
//     name: string;
//     logo: {
//       '@type': string;
//       url: string;
//     };
//   };
//   mainEntityOfPage: {
//     '@type': string;
//     '@id': string;
//   };
// }

// export interface FAQSchema {
//   '@context': string;
//   '@type': string;
//   mainEntity: Array<{
//     '@type': string;
//     name: string;
//     acceptedAnswer: {
//       '@type': string;
//       text: string;
//     };
//   }>;
// }

// /**
//  * Organization Schema for PMU Forms
//  */
// export const organizationSchema: OrganizationSchema = {
//   '@context': 'https://schema.org',
//   '@type': 'Organization',
//   name: 'PMU Forms',
//   url: 'https://pmuforms.com',
//   logo: 'https://pmuforms.com/PMULogo.png',
//   description:
//     'PMU Forms is the leading digital consent and aftercare solution for permanent makeup artists',
//   sameAs: [
//     'https://www.facebook.com/pmuforms',
//     'https://www.instagram.com/pmuforms',
//     'https://www.linkedin.com/company/pmuforms',
//   ],
//   contactPoint: {
//     '@type': 'ContactPoint',
//     contactType: 'Customer Service',
//     email: 'support@pmuforms.com',
//     telephone: '+1-512-XXX-XXXX',
//   },
// };

// /**
//  * Breadcrumb Schema for navigation
//  */
// export const createBreadcrumbSchema = (
//   items: Array<{ name: string; url: string }>
// ): BreadcrumbSchema => {
//   return {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: items.map((item, index) => ({
//       '@type': 'ListItem',
//       position: index + 1,
//       name: item.name,
//       item: item.url,
//     })),
//   };
// };

// /**
//  * Article Schema for blog posts
//  */
// export const createArticleSchema = (
//   headline: string,
//   description: string,
//   image: string,
//   datePublished: string,
//   dateModified: string,
//   author: string,
//   url: string
// ): ArticleSchema => {
//   return {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     headline,
//     description,
//     image,
//     datePublished,
//     dateModified,
//     author: {
//       '@type': 'Person',
//       name: author,
//     },
//     publisher: {
//       '@type': 'Organization',
//       name: 'PMU Forms',
//       logo: {
//         '@type': 'ImageObject',
//         url: 'https://pmuforms.com/PMULogo.png',
//       },
//     },
//     mainEntityOfPage: {
//       '@type': 'WebPage',
//       '@id': url,
//     },
//   };
// };

// /**
//  * FAQ Schema for FAQ section
//  */
// export const createFAQSchema = (
//   faqItems: Array<{ question: string; answer: string }>
// ): FAQSchema => {
//   return {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqItems.map((item) => ({
//       '@type': 'Question',
//       name: item.question,
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: item.answer,
//       },
//     })),
//   };
// };
