import {RefObject, useRef, useState} from "react";
import {ArrowDown, ArrowRight, Dot, MapPinIcon, WorkflowIcon} from "lucide-react";
import {AnimatedBeam} from "@/components/AnimatedBeam";

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
        <div className={`flex w-full ${position === "left" ? "justify-start" : "justify-end"}`}>
            <div className="relative w-1/2 p-4">
                {position === "left" ? (
                    <div>
                        {order === "first" && (
                            <span ref={rightRef}
                                  className={`${nodClasses} top-1/2 right-0 -translate-y-1/2 translate-x-1/2`}/>
                        )}
                        {order === "last" && (
                            <span ref={topRef} className={`${nodClasses} top-0 left-1/2 -translate-y-1/2`}/>
                        )}
                        {(order !== "last" && order !== "first") && (
                            <div>
                                <span ref={topRef} className={`${nodClasses} top-0 left-1/2 -translate-y-1/2 `}/>
                                <span ref={rightRef}
                                      className={`${nodClasses} top-1/2 right-0 -translate-y-1/2 translate-x-1/2`}/>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <span ref={topRef} className={`${nodClasses} top-0 left-1/2 -translate-y-1/2`}/>
                        {order !== "last" && (
                            <span ref={leftRef}
                                  className={`${nodClasses} top-1/2 left-0 -translate-y-1/2 -translate-x-1/2`}/>
                        )}
                    </div>
                )}
                <div className="text-[var(--gray-999)] bg-[var(--gray-100)] shadow-md rounded-lg p-4">
                    {children}
                </div>
                {/* Le point central */}

            </div>
        </div>
    );
};

export default function ExperienceAbout() {
    const containerRef = useRef<HTMLDivElement>(null)
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);

    const [toggle, setToggle] = useState(true);

    return (
        <div ref={containerRef} className="relative w-full">
            <div
                onClick={() => setToggle(!toggle)}
                className="flex justify-between items-center cursor-pointer transition-colors hover:text-[var(--gray-700)]">
                <h2 className="text-xl lg:text-3xl">Experiences professionnelles</h2>
                {toggle ? (
                    <ArrowDown className="text-[var(--accent-dark)] size-10 lg:size-20"/>
                ) : (
                    <ArrowRight className="text-[var(--accent-dark)] size-10 lg:size-20"/>
                )}
            </div>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    toggle ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="h-10"></div>

                <RoadmapItem position="left" order="first" rightRef={ref1}>
                <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Stage BTS SIO 1</p>
                                <p>2023 (4 semaines)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Atool Dév. - Nantes - 44300</p>
                            </div>
                            <div className="flex gap-2 items-start text-lg italic font-bold">
                                <WorkflowIcon size="18" className="translate-y-1/3"/>
                                <p>Développement d'un CRUD/BREAD pour une application client</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Back-end : Sails TS</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Front-end : Angular TS</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Utilisation d'outils graphique comme Canva ou Figma pour maquetter</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Versionnage grâce à GitHub</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>
                <RoadmapItem position="right" topRef={ref2} leftRef={ref3}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Stage BTS SIO 2</p>
                                <p>2024 (6 semaines)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Notre Dame du Roc - La Roche-sur-Yon - 85000</p>
                            </div>
                            <div className="flex gap-2 items-start text-lg italic font-bold">
                                <WorkflowIcon size="18" className="translate-y-1/3"/>
                                <p>Développement d'une application Web-Mobile-Api</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Web : Organisation du planning des intervention</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Mobile : Outil d'intervention et rédaction de rapports</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>API - Communication sécurisée et rapide avec la base de données</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Versionnage grâce à GitLab</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>
                <RoadmapItem position="left" order="last" topRef={ref4}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Stage BTS SIO 2</p>
                                <p>2025 (6 semaines)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Notre Dame du Roc - La Roche-sur-Yon - 85000</p>
                            </div>
                            <div className="flex gap-2 items-start text-lg italic font-bold">
                                <WorkflowIcon size="18" className="translate-y-1/3"/>
                                <p>Développement d'un POC pour un Saas et autres</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Création de l'interface avec des outils modernes (React)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Développement de la logique de l'application (Adonis)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Versionnage grâce à GitHub</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Développement d'autres petits projets expérimentaux</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>

                <AnimatedBeam containerRef={containerRef} fromRef={ref1} toRef={ref2} curvature={10}/>
                <AnimatedBeam containerRef={containerRef} fromRef={ref3} toRef={ref4} curvature={10} reverse={true}/>
            </div>
        </div>
    );
}