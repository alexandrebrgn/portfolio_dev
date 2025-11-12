import { WorkProjectWithSlug } from '@/lib/work';

interface StructuredDataProps {
  type: 'Person' | 'WebSite' | 'Article';
  data?: WorkProjectWithSlug;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.com';

  const getStructuredData = () => {
    switch (type) {
      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Alexandre Bourguignon",
          "jobTitle": "Développeur & Concepteur",
          "url": siteUrl,
          "sameAs": [
            "https://www.linkedin.com/in/alexandre-bourguignon-2782b9273/",
            "https://github.com/alexandrebrgn",
            "https://www.instagram.com/alex.brgn",
          ],
        };
      
      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Alexandre Bourguignon - Portfolio",
          "url": siteUrl,
          "author": {
            "@type": "Person",
            "name": "Alexandre Bourguignon",
          },
        };
      
      case 'Article':
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.data.title,
          "description": data.data.description,
          "image": `${siteUrl}${data.data.img}`,
          "datePublished": data.data.publishDate,
          "author": {
            "@type": "Person",
            "name": "Alexandre Bourguignon",
          },
          "keywords": data.data.tags?.join(', '),
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}