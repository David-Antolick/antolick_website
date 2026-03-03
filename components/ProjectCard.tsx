"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

function formatDates(dates: string): string {
  return dates
    .replace("– Present", "–Now")
    .replace("Aug ", "")
    .replace("Sep ", "");
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full text-left group py-6 border-b border-[#1e2140] last:border-b-0 cursor-pointer transition-colors hover:bg-violet-500/[0.03]"
      >
        <div className="grid grid-cols-1 md:grid-cols-[7rem_1fr] gap-1 md:gap-6">
          {/* Date column */}
          <span className="font-mono text-sm text-violet-400/80 md:text-right md:pt-1">
            {formatDates(project.dates)}
          </span>

          {/* Content column */}
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              {project.link && (
                <span className="text-violet-400 text-base">↗</span>
              )}
            </div>
            <p className="text-sm font-mono text-slate-400 mt-0.5">
              {project.role}
            </p>
            <p className="text-base text-slate-300 mt-2 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-violet-300/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
