import { MetadataRoute } from 'next';
import { getAllWorkProjects } from '@/lib/work';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllWorkProjects();
  
  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(project.data.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectUrls,
  ];
}