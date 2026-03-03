"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

function formatDates(dates: string): string {
  return dates
    .replace("– Present", " – Now")
    .replace("Aug ", "")
    .replace("Sep ", "");
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-full text-left group p-5 rounded-lg border border-[#1e2140] bg-[#0d1025]/30 hover:border-violet-500/40 hover:bg-[#0d1025]/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)] transition-all cursor-pointer flex flex-col"
      >
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-sm text-violet-400 shrink-0">
            {formatDates(project.dates)}
          </span>
        </div>

        <p className="text-sm font-mono text-slate-400">
          {project.role}
        </p>

        <p className="text-base text-slate-300 mt-3 leading-relaxed">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded bg-violet-500/10 text-violet-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-sm text-violet-400 hover:text-violet-300 hover:border-violet-400/60 transition-colors mt-3 inline-flex items-center gap-1 border border-violet-500/30 rounded px-2 py-0.5"
          >
            {project.linkLabel || "View Project"} <span>↗</span>
          </a>
        )}
      </button>
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
