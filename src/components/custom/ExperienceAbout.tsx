import { RefObject, useRef, useState } from "react";
import {
	ArrowDown,
	ArrowRight,
} from "lucide-react";
import { AnimatedBeam } from "@/components/AnimatedBeam";
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
	children,
}) => {
	const nodClasses = "absolute w-2 h-2 bg-[var(--gray-800)] rounded-full z-999";

	return (
		<div className={`flex gap-2 w-full ${position === "left" ? "justify-start" : "justify-end"}`}>
			<div className="relative w-full lg:w-1/2 p-4">
				{position === "left" ? (
					<div>
						{order === "first" && (
							<span
								ref={rightRef}
								className={`${nodClasses}
									bottom-0 lg:top-1/2
									right-1/2 lg:right-0
									translate-y-1/2 lg:-translate-y-1/2
									translate-x-1/1 lg:translate-x-1/2`}
							/>
						)}
						{order === "last" && (
							<span
								ref={topRef}
								className={`${nodClasses} top-0 left-1/2 -translate-y-1/2`}
							/>
						)}
						{order !== "last" && order !== "first" && (
							<div>
								<span
									ref={topRef}
									className={`${nodClasses} top-0 left-1/2 -translate-y-1/2`}
								/>
								<span
									ref={rightRef}
									className={`${nodClasses}
										bottom-0 lg:top-1/2
										right-1/2 lg:right-0
										translate-y-1/2 lg:-translate-y-1/2
										translate-x-1/1 lg:translate-x-1/2`}
								/>
							</div>
						)}
					</div>
				) : (
					<div>
						{order === "first" && (
							<span
								ref={leftRef}
								className={`${nodClasses}
									bottom-0 lg:top-1/2
									right-1/2 lg:right-0
									translate-y-1/2 lg:-translate-y-1/2
									translate-x-1/1 lg:translate-x-1/2`}
							/>
						)}
						{order === "last" && (
							<span
								ref={topRef}
								className={`${nodClasses}
									top-0
									left-1/2
									-translate-y-1/2
									lg:-translate-x-1/2`}
							/>
						)}
						{order !== "last" && order !== "first" && (
							<div>
								<span
									ref={topRef}
									className={`${nodClasses} top-0 left-1/2 -translate-y-1/2`}
								/>
								<span
									ref={leftRef}
									className={`${nodClasses}
										bottom-0 lg:top-1/2
										right-1/2 lg:left-0
										translate-y-1/2 lg:-translate-y-1/2
										translate-x-1/1 lg:-translate-x-1/2`}
								/>
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

export default function ExperienceAbout() {
	const containerRef = useRef<HTMLDivElement>(null);
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const ref3 = useRef<HTMLDivElement>(null);
	const ref4 = useRef<HTMLDivElement>(null);
	const ref5 = useRef<HTMLDivElement>(null);
	const ref6 = useRef<HTMLDivElement>(null);

	const [toggle, setToggle] = useState(true);

	return (
		<div ref={containerRef} className="relative w-full">
			<div
				onClick={() => setToggle(!toggle)}
				className="flex justify-between items-center cursor-pointer transition-colors hover:text-[var(--gray-700)]"
			>
				<h2 className="text-xl lg:text-3xl">Experiences professionnelles</h2>
				{toggle ? (
					<ArrowDown className="text-[var(--accent-dark)] size-10 lg:size-20" />
				) : (
					<ArrowRight className="text-[var(--accent-dark)] size-10 lg:size-20" />
				)}
			</div>
			<div
				className={`transition-all duration-500 ease-in-out overflow-hidden ${
					toggle ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="h-10"></div>

				<RoadmapItem position="left" order="first" rightRef={ref1}>
					<InfoCard
						type="exp"
						company="Atool Dev."
						contract="stage"
						title="Stage BTS SIO 1"
						location="Nantes - 44300"
						date="2023 (4 semaines)"
						description="Développement d'un CRUD/BREAD pour une application client"
						subjects={[
							"Back-end : Sails TS",
							"Front-end : Angular TS",
							"Utilisation d'outils graphique comme Canva ou Figma pour maquetter",
							"Versionnage grâce à GitHub"
						]}
					/>
				</RoadmapItem>

				<div className="h-30 lg:h-0"/>

				<RoadmapItem position="right" topRef={ref2} leftRef={ref3}>
					<InfoCard
						type="exp"
						company="Notre Dame du Roc"
						contract="stage"
						title="Stage BTS SIO 2"
						location="La Roche-sur-Yon - 85000"
						date="2024 (6 semaines)"
						description="Développement d'une application Web-Mobile-Api"
						subjects={[
							"Web : Organisation du planning des intervention",
							"Mobile : Outil d'intervention et rédaction de rapports",
							"API - Communication sécurisée et rapide avec la base de données",
							"Versionnage grâce à GitLab"
						]}
					/>
				</RoadmapItem>

				<div className="h-30 lg:h-0"/>

				<RoadmapItem position="left" topRef={ref4} rightRef={ref5}>
					<InfoCard
						type="exp"
						company="Baptiste Parmentier"
						contract="stage"
						title="Stage BTS SIO 2"
						location="La Ferrière - 85089"
						date="2025 (6 semaines)"
						description="Développement d'un POC pour un Saas et autres"
						subjects={[
							"Création de l'interface avec des outils modernes (React)",
							"Développement de la logique de l'application (Adonis)",
							"Versionnage grâce à GitHub",
							"Développement d'autres petits projets expérimentaux"
						]}
					/>
				</RoadmapItem>

				<div className="h-30 lg:h-0"/>

				<RoadmapItem position="right" order="last" topRef={ref6}>
					<InfoCard
						type="exp"
						company="Puy Du Fou"
						contract="alternance"
						title="Alternance Bachelor CDA"
						location="Les Epesses - 85590"
						date="2025 - 2026"
						description="Développement d'applications pour les Ressources Humaines"
						subjects={[
							"Front-end : VueJs, Astro",
							"Back-end : Architect",
							"Organisation sous méthode Agile (Daily, Review, Rétro...)",
							"Versionnage grâce à GitLab (Merge Requests...)",
							"Saas, SPA, PWA etc..."
						]}
					/>
				</RoadmapItem>

				<AnimatedBeam
					duration={3}
					containerRef={containerRef}
					fromRef={ref1}
					toRef={ref2}
					curvature={10}
				/>
				<AnimatedBeam
					duration={3}
					delay={1}
					containerRef={containerRef}
					fromRef={ref3}
					toRef={ref4}
					curvature={10}
					reverse={true}
				/>
				<AnimatedBeam
					duration={3}
					delay={2}
					containerRef={containerRef}
					fromRef={ref5}
					toRef={ref6}
					curvature={10}
				/>
			</div>
		</div>
	);
}
