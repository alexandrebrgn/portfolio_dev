import { Briefcase, CalendarDays, GraduationCap, MapPin } from "lucide-react";

type ContractType = "stage" | "alternance" | "cdi" | "cdd";

const contractConfig: Record<ContractType, { label: string; color: string }> = {
	stage: { label: "Stage", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
	alternance: { label: "Alternance", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
	cdi: { label: "CDI", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
	cdd: { label: "CDD", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
};

interface InfoCardProps {
	type: "exp" | "school";
	title: string;
	location: string;
	date: string;
	company?: string;
	contract?: ContractType;
	description?: string;
	subjects: string[];
}

export default function InfoCard({ type, title, company, contract, location, date, description, subjects }: InfoCardProps) {
	return (
		<div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
			{/* Header */}
			<div className="flex justify-between items-stretch gap-2">
				<div className="flex items-center gap-1.5 md:gap-2 min-w-0">
					{type === "exp" ? (
						<Briefcase className="shrink-0 text-[var(--accent-light)] size-6 md:size-8 lg:size-10" />
					) : (
						<GraduationCap className="shrink-0 text-[var(--accent-light)] size-4 md:size-5 lg:size-6" />
					)}
					<p className="text-sm md:text-lg lg:text-xl font-bold truncate">
						{type === "exp" ? company : title}
					</p>
				</div>
				{type === "exp" && contract && (
					<span className={`shrink-0 text-xs md:text-sm lg:text-base font-semibold px-2 md:px-3 rounded-full border flex items-center ${contractConfig[contract].color}`}>
						{contractConfig[contract].label}
					</span>
				)}
			</div>

			{/* Meta line */}
			<div className="flex flex-wrap items-center gap-x-2 md:gap-x-3 gap-y-1 text-[10px] md:text-xs lg:text-sm text-[var(--gray-500)]">
				{type === "exp" && (
					<p className="text-xs md:text-sm lg:text-base font-semibold text-[var(--gray-600)]">{title}</p>
				)}
				<span className="flex items-center gap-1">
					<MapPin className="size-3 md:size-3.5 lg:size-4" />
					{location}
				</span>
				<span className="flex items-center gap-1">
					<CalendarDays className="size-3 md:size-3.5 lg:size-4" />
					{date}
				</span>
			</div>

			{/* Description */}
			{description && (
				<p className="text-xs md:text-sm lg:text-base italic text-[var(--gray-700)] border-l-2 border-[var(--accent-regular)] pl-2">
					{description}
				</p>
			)}

			{/* Subjects */}
			{subjects.length > 0 && (
				<ul className="flex flex-col gap-0.5 md:gap-1 text-xs md:text-sm lg:text-base">
					{subjects.map((subject) => (
						<li key={subject} className="flex items-center gap-1.5 md:gap-2">
							<span className="mt-1 md:mt-1.5 h-1 w-1 md:h-1.5 md:w-1.5 shrink-0 rounded-full bg-[var(--accent-regular)]" />
							{subject}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
