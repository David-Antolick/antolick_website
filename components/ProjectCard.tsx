"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

function formatYear(dates: string): string {
  const years = dates.match(/\d{4}/g);
  if (!years) return dates;
  const currentYear = new Date().getFullYear().toString();
  if (dates.includes("Present")) {
    if (years[0] === currentYear) return currentYear;
    return `${years[0]}-${currentYear.slice(2)}`;
  }
  if (years.length === 1) return years[0];
  if (years[0] === years[1]) return years[0];
  return `${years[0]}-${years[1].slice(2)}`;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-left group py-4 px-5 rounded-lg border border-transparent hover:border-violet-500/30 hover:bg-[#0d1025]/60 transition-all cursor-pointer"
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-violet-400/70 shrink-0 w-16">
            {formatYear(project.dates)}
          </span>
          <div className="min-w-0 flex-1">
            <span className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
              {project.title}
            </span>
            {project.dates.includes("Present") && (
              <span className="ml-2 font-mono text-xs text-emerald-400/80">
                active
              </span>
            )}
            <p className="text-sm text-slate-400 mt-0.5 truncate">
              {project.oneLiner}
            </p>
          </div>
          <span
            className="text-slate-600 group-hover:text-violet-400 transition-colors ml-auto shrink-0"
            aria-hidden="true"
          >
            &rarr;
          </span>
        </div>
      </button>
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
