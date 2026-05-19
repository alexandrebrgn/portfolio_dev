'use client'

import BaseLayout from "@/layouts/BaseLayout"
import MyCard from "@/components/custom/MyCard";
import SplitText from "@/components/SplitText";
import Button from "@/components/custom/Button";
import {CodeXml, EyeIcon, Laptop, User} from "lucide-react";
import ProjectGrid from "@/components/custom/ProjectGrid";
import {WorkProjectWithSlug} from "@/lib/work";
import ProjectCard from "@/components/custom/ProjectCard";
import AnimatedContent from "@/components/AnimatedContent";

type HomeContentProps = {
    projects: WorkProjectWithSlug[];
}

export default function HomeContent({projects}: HomeContentProps) {
    return (
        <div>
            <BaseLayout>
                <div className="home flex flex-col lg:flex-row items-center justify-between gap-10 mb-20!">
                    <div className="flex w-full gap-4 lg:gap-10 flex-col items-center lg:items-start">

                        {/* sr-only : seulement pour les screen readers */}
                        <h1 className="sr-only">Alexandre Bourguignon - Portfolio</h1>

                        <SplitText
                            text="Bonjour, je suis Alexandre."
                            className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold text-center flex items-center justify-center"
                            delay={30}
                            duration={1.5}
                            ease="elastic.out(0.6, 0.3)"
                            splitType="chars"
                            from={{opacity: 0, y: 40}}
                            to={{opacity: 1, y: 0}}
                            threshold={0.1}
                            textAlign="left"
                        />

                        <div className="w-9/10 ">
                            <AnimatedContent delay={1.4}>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-center lg:text-start">Je suis étudiant en Bachelor
                                CDA au campus
                                Notre-Dame du Roc à La Roche-Sur-Yon.</p>
                            </AnimatedContent>
                        </div>

                        <div className="flex flex-col gap-4">
                            <AnimatedContent delay={1.6}>
                                <div className="hidden lg:flex items-center gap-2">
                                    <Button text={"Developer"} icon={<CodeXml/>}/>
                                    <Button text={"Concepter"} icon={<Laptop/>}/>
                                    <Button text={"Junior"} icon={<User/>}/>
                                </div>
                            </AnimatedContent>
                            <div className="w-full">
                                <AnimatedContent delay={1.8}>
                                    <Button text={"Consulter mon CV"} gradient={true} icon={<EyeIcon/>}
                                            className="w-full"/>
                                </AnimatedContent>
                            </div>
                        </div>

                    </div>
                    <div className="w-auto">
                        <AnimatedContent
                            direction='horizontal'
                            delay={1.2}>
                            <MyCard src="/assets/portrait.jpg" className="max-w-80 lg:max-w-180 rounded-4xl"/>
                        </AnimatedContent>
                    </div>
                </div>
                <div className="w-full border-t border-gray-200 mb-5! lg:mb-10!"/>
                <h1 className="text-3xl lg:text-5xl mb-16!">Quelques projets.</h1>
                <div className="">
                    <AnimatedContent>
                        <ProjectGrid variant="offset">
                            {projects.map((project) => (
                                <li key={project.slug}>
                                    <ProjectCard project={project}/>
                                </li>
                            ))}
                        </ProjectGrid>
                    </AnimatedContent>
                </div>
            </BaseLayout>
        </div>
    );
}