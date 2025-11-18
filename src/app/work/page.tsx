import {Metadata} from 'next';
import BaseLayout from "@/layouts/BaseLayout";
import {getAllWorkProjects, WorkProject, WorkProjectWithSlug} from "@/lib/work";
import ProjectGrid from "@/components/custom/ProjectGrid";
import ProjectCard from "@/components/custom/ProjectCard";
import AnimatedContent from "@/components/AnimatedContent";

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
    const title = "Mes projets";
    const description = "Visionnez mes projets"

    return (
        <BaseLayout title={title} description={description}>
            <main>
                <ProjectGrid variant="offset">
                    {projects.map((project) => (
                        <li key={project.slug}>
                            <ProjectCard project={project}/>
                        </li>
                    ))}
                </ProjectGrid>
            </main>
        </BaseLayout>
    );
}