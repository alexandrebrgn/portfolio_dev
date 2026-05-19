import {RefObject, useRef, useState} from "react";
import {ArrowDown, ArrowRight} from "lucide-react";
import {AnimatedBeam} from "@/components/AnimatedBeam";
import InfoCard from "./InfoCard";

interface RoadmapItemProps {
    position: "left" | "right";
    order?: "first" | "last";
    topRef?: RefObject<HTMLDivElement | null>;
    rightRef?: RefObject<HTMLDivElement | null>;
    leftRef?: RefObject<HTMLDivElement | null>;
    children?: React.ReactNode;
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({
                                                     position,
                                                     order,
                                                     topRef,
                                                     leftRef,
                                                     rightRef,
                                                     children
                                                 }) => {
    const nodClasses = "absolute w-2 h-2 bg-[var(--gray-800)] rounded-full z-999"

    return (
        <div className={`flex gap-4 w-full gap-2 ${position === "left" ? "justify-start" : "justify-end"}`}>
            <div className="relative w-full lg:w-1/2 p-4">
                {position === "left" ? (
                    <div>
                        {order === "first" && (
                            <span ref={rightRef} className={`${nodClasses} 
                                bottom-0 lg:top-1/2 
                                right-1/2 lg:right-0 
                                translate-y-1/2 lg:-translate-y-1/2 
                                translate-x-1/1 lg:translate-x-1/2`}/>
                        )}
                        {order === "last" && (
                            <span ref={topRef} className={`${nodClasses} 
                                top-0 
                                left-1/2 
                                -translate-y-1/2`}/>
                        )}
                        {(order !== "last" && order !== "first") && (
                            <div>
                                <span ref={topRef} className={`${nodClasses} 
                                      top-0 left-1/2 
                                      -translate-y-1/2`}/>
                                <span ref={rightRef} className={`${nodClasses} 
                                      bottom-0 lg:top-1/2 
                                      right-1/2 lg:right-0 
                                      translate-y-1/2 lg:-translate-y-1/2 
                                      translate-x-1/1 lg:translate-x-1/2`}/>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        {order === "first" && (
                            <span ref={leftRef} className={`${nodClasses} 
                                bottom-0 lg:top-1/2 
                                right-1/2 lg:right-0 
                                translate-y-1/2 lg:-translate-y-1/2 
                                translate-x-1/1 lg:translate-x-1/2`}/>
                        )}
                        {order === "last" && (
                            <span ref={topRef} className={`${nodClasses}
                                top-0
                                left-1/2
                                -translate-y-1/2
                                lg:-translate-x-1/2`}/>
                        )}
                        {order !== "last" && order !== "first" && (
                            <div>
                                <span ref={topRef} className={`${nodClasses} 
                                    top-0 
                                    left-1/2 
                                    -translate-y-1/2`}/>
                                <span ref={leftRef} className={`${nodClasses} 
                                    bottom-0 lg:top-1/2 
                                    right-1/2 lg:left-0 
                                    translate-y-1/2 lg:-translate-y-1/2 
                                    translate-x-1/1 lg:-translate-x-1/2`}/>
                            </div>
                        )}
                    </div>
                )}
                <div className="text-[var(--gray-999)] bg-[var(--infocard)] shadow-md rounded-lg p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default function SchoolAbout() {
    const containerRef = useRef<HTMLDivElement>(null)
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const ref6 = useRef<HTMLDivElement>(null);

    const [toggle, setToggle] = useState(false)

    return (
        <div ref={containerRef} className="relative w-full">
            <div
                onClick={() => setToggle(!toggle)} className="flex justify-between items-center cursor-pointer transition-colors hover:text-[var(--gray-700)]">
                <h2 className="text-xl lg:text-3xl">Parcours scolaire</h2>
                {toggle ? (
                    <ArrowDown className="text-[var(--accent-dark)] size-10 lg:size-20"/>
                ) : (<ArrowRight className="text-[var(--accent-dark)] size-10 lg:size-20"/>)}
            </div>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    toggle ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                <div className="h-10"></div>

                <RoadmapItem position="left" order="first" rightRef={ref1}>
                    <InfoCard
                        type="school"
                        title="Baccalauréat Général"
                        date="2018 - 2021"
                        location="Lycée Alcide d'Orbigny - Bouaye - 44640"
                        subjects={[
                            "Obtention du Baccalauréat Général sans mention.",
                            "Spécialité Mathématiques et Physique-Chimie.",
                            "Aucun pied mis dans le monde développement à ce jour."
                        ]}
                    />
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="right" topRef={ref2} leftRef={ref3}>
                    <InfoCard
                        type="school"
                        title="Programme Grande Ecoles"
                        date="2021 - 2022"
                        location="Epitech - Nantes - 44100"
                        subjects={[
                            "Développement de programmes en C (jeux vidéos, algorithmes...)",
                            "Développement de programmes mathématiques en Python(calcul matriciel...)"
                        ]}
                    />
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="left" topRef={ref4} rightRef={ref5}>
                    <InfoCard
                        type="school"
                        title="BTS Services Informatiques aux Organisations"
                        date="2022 - 2025"
                        location="Bouaye - 44640"
                        subjects={[
                            "Formation d'ingénieur"
                        ]}
                    />
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="right" order="last" topRef={ref6}>
                    <InfoCard
                        type="school"
                        title="Bachelor Conception Developpement d'Applications"
                        date="2025 - 2026"
                        location="Lycée Alcide d'Orbigny - Bouaye - 44640"
                        subjects={[
                            "Obtention du Baccalauréat Général sans mention.",
                            "Spécialité Mathématiques et Physique-Chimie.",
                            "Aucun pied mis dans le monde développement à ce jour."
                        ]}
                    />
                </RoadmapItem>

                <AnimatedBeam containerRef={containerRef} fromRef={ref1} toRef={ref2} curvature={10}/>
                <AnimatedBeam containerRef={containerRef} fromRef={ref3} toRef={ref4} curvature={10} reverse={true}/>
                <AnimatedBeam containerRef={containerRef} fromRef={ref5} toRef={ref6} curvature={10}/>
            </div>
        </div>
    );
}