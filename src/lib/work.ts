import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

const workDirectory = path.join(process.cwd(), 'src/data/work');

export interface WorkProject {
  title: string;
  publishDate: string;
  img: string;
  img_alt?: string;
  description: string;
  tags?: string[];
}

export interface WorkProjectWithSlug {
  slug: string;
  data: WorkProject;
  content: string;
}

export const getProjectsCustom = cache((): WorkProjectWithSlug[] => {
  // Slugs choisis en dur (les noms de fichiers sans .md)
  const selectedSlugs = ["biomedis", "seven", "only-ghibli", "matodoliste"];

  return selectedSlugs.map((slug) => {
    const fullPath = path.join(workDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      data: data as WorkProject,
      content,
    };
  });
});

export const getAllWorkProjects = cache((): WorkProjectWithSlug[] => {
  // Lire tous les fichiers .md dans le dossier work
  const fileNames = fs.readdirSync(workDirectory);
  const allProjectsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      // Enlever .md pour obtenir le slug
      const slug = fileName.replace(/\.md$/, '');
      
      // Lire le contenu du fichier
      const fullPath = path.join(workDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parser le frontmatter
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        data: data as WorkProject,
        content,
      };
    });

  // Trier par date de publication (plus récent en premier)
  return allProjectsData.sort((a, b) => {
    const dateA = new Date(a.data.publishDate).getTime();
    const dateB = new Date(b.data.publishDate).getTime();
    return dateB - dateA;
  });
});

export function getWorkProjectBySlug(slug: string): WorkProjectWithSlug | null {
  try {
    const fullPath = path.join(workDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      data: data as WorkProject,
      content,
    };
  } catch (error) {
    return null;
  }
}