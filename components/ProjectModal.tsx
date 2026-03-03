"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
      return () => {
        dialog.close();
      };
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="max-w-2xl w-full rounded-lg p-0 bg-[#12152a] text-slate-200 backdrop:bg-black/70"
    >
      <div className="p-8 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-slate-400 mt-1">
              {project.role} &middot; {project.dates}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-violet-400 text-2xl leading-none flex-shrink-0 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 mt-2 inline-block text-sm transition-colors"
          >
            {project.linkLabel || "View Project"} &rarr;
          </a>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-violet-500/15 text-violet-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-3">
          {project.details.map((detail, i) => (
            <li
              key={i}
              className="text-sm leading-relaxed text-slate-300 pl-4 border-l-2 border-violet-500/30"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
