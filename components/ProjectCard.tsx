"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-left border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {project.role} &middot; {project.dates}
        </p>
        <p className="mt-3 text-gray-700">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
      {isOpen && (
        <ProjectModal project={project} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
