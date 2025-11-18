import {RefObject, useRef, useState} from "react";
import {ArrowDown, ArrowRight, Dot, MapPinIcon} from "lucide-react";
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
                <div className="text-[var(--gray-999)] bg-[var(--gray-100)] shadow-md rounded-lg p-4">
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
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Baccalauréat Général</p>
                                <p>2018 - 2021</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Lycée Alcide d'Orbigny - Bouaye - 44640</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Obtention du Baccalauréat Général sans mention.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Spécialité Mathématiques et Physique-Chimie.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Aucun pied mis dans le monde développement à ce jour.</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="right" topRef={ref2} leftRef={ref3}>
                    <div className="flex flex-col">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Programme Grande Ecoles</p>
                                <p>2021 - 2022</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Epitech - Nantes - 44100</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Développement de programmes en C (jeux vidéos, algorithmes...)</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Développement de programmes mathématiques en Python(calcul matriciel...)</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="left" topRef={ref4} rightRef={ref5}>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold font-stretch-150%">BTS Services Informatiques aux
                                Organisations</p>
                            <p className="min-w-1/4">2022-2025</p>
                        </div>
                        <div className="flex gap-2">
                            <MapPinIcon/>
                            <p>Bouaye - 44640</p>
                        </div>
                        <div className="flex gap-2">
                            <Dot/>
                            <p>Formation d'ingénieur</p>
                        </div>
                    </div>
                </RoadmapItem>

                <div className="h-30 lg:h-0"/>

                <RoadmapItem position="right" order="last" topRef={ref6}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-xl font-bold font-stretch-150%">Bachelor Conception Developpement
                                    d'Applications</p>
                                <p>2018 - 2021</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MapPinIcon size="18"/>
                                <p>Lycée Alcide d'Orbigny - Bouaye - 44640</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Obtention du Baccalauréat Général sans mention.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Spécialité Mathématiques et Physique-Chimie.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Dot size="18"/>
                                <p>Aucun pied mis dans le monde développement à ce jour.</p>
                            </div>
                        </div>
                    </div>
                </RoadmapItem>

                <AnimatedBeam containerRef={containerRef} fromRef={ref1} toRef={ref2} curvature={10}/>
                <AnimatedBeam containerRef={containerRef} fromRef={ref3} toRef={ref4} curvature={10} reverse={true}/>
                <AnimatedBeam containerRef={containerRef} fromRef={ref5} toRef={ref6} curvature={10}/>
            </div>
        </div>
    );
}