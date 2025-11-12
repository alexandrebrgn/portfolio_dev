import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BaseLayout from "@/layouts/BaseLayout";
import { getWorkProjectBySlug, getAllWorkProjects } from "@/lib/work";
import Markdown from 'react-markdown';
import WorkBadgesList from '@/components/custom/WorkBadgesList';
import Link from 'next/link';
import { ArrowLeftIcon, UserIcon } from 'lucide-react';

// Générer les metadata statiques pour chaque projet
export async function generateStaticParams() {
  const projects = getAllWorkProjects();
  return projects.map((project) => ({
    slug: project.slug.split('/'),
  }));
}

// Générer les metadata pour chaque projet
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}): Promise<Metadata> {
  const { slug: slugSegments = [] } = await params;

  if (slugSegments.length === 0) {
    return {
      title: "Projet non trouvé",
    };
  }

  const slug = slugSegments.join('/');
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.com';

  return {
    title: project.data.title,
    description: project.data.description,
    openGraph: {
      title: `${project.data.title} - Alexandre Bourguignon`,
      description: project.data.description,
      images: [
        {
          url: `${siteUrl}${project.data.img}`,
          width: 1200,
          height: 630,
          alt: project.data.img_alt || project.data.title,
        },
      ],
      type: "article",
      publishedTime: project.data.publishDate,
      tags: project.data.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: project.data.title,
      description: project.data.description,
      images: [`${siteUrl}${project.data.img}`],
    },
  };
}

export default async function WorkProject({ 
  params 
}: { 
  params: Promise<{ slug?: string[] }> 
}) {
  const { slug: slugSegments = [] } = await params;

  if (slugSegments.length === 0) {
    notFound();
  }

  const slug = slugSegments.join('/');
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <BaseLayout>
      <main>
        <article itemScope itemType="https://schema.org/CreativeWork">
          {/* Retour en arrière */}
          <div>
            <Link href={"/work"}>
              <div className="flex text-lg items-center gap-2">
                <ArrowLeftIcon size={26}/>
                <p>Projets</p> 
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <h1 itemProp="name">{project.data.title}</h1>
            <div className='flex justify-between gap-5 align-items'>
              <WorkBadgesList tags={project.data.tags ?? []} />
              <div itemProp="description" className='max-w-1/2'>{project.data.description}</div>
            </div>
          </div>
          <meta itemProp="datePublished" content={project.data.publishDate} />
        </article>
      </main>
      <div>
        <Markdown>{project.content}</Markdown>
      </div>
    </BaseLayout>
  );
}