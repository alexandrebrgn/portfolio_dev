import { Metadata } from 'next';
import BaseLayout from "@/layouts/BaseLayout";
import {getAllWorkProjects, WorkProject, WorkProjectWithSlug} from "@/lib/work";
import ProjectGrid from "@/components/custom/ProjectGrid";
import ProjectCard from "@/components/custom/ProjectCard";

export const metadata: Metadata = {
  title: "Mes Projets",
  description: "Découvrez mes projets de développement web, applications et réalisations. Projets réalisés avec React, TypeScript, Next.js et bien d'autres technologies.",
  openGraph: {
    title: "Mes Projets - Alexandre Bourguignon",
    description: "Portfolio de projets de développement web et applications.",
  },
};

function isProWork(work: WorkProjectWithSlug) {
  return work.data.tags?.includes('Etudes') ?? false;
}

export default function Works() {
  const projects = getAllWorkProjects()

  return (
    <BaseLayout>
      <main>
        <h1>Mes projets</h1>
        <ProjectGrid variant="offset">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ProjectGrid>
      </main>
    </BaseLayout>
  );
}