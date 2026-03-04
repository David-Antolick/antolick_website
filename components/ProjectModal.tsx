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
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="m-auto max-w-2xl w-[calc(100%-2rem)] rounded-lg p-0 bg-[#12152a] border border-[#1e2140] text-slate-200 backdrop:bg-black/70"
    >
      <div className="p-8 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="font-mono text-sm text-slate-400 mt-1">
              {project.role} · {project.dates}
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

        {project.image && (
          <div className="mt-4 rounded-lg overflow-hidden border border-[#1e2140]">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-violet-500/15 text-violet-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {project.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-lg font-bold tracking-wide text-white mb-3 border-l-2 border-violet-400 pl-3">
                {section.title}
              </h4>
              <p className="text-base leading-relaxed text-slate-300">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#1e2140]">
          <a
            href={`mailto:david@antolick.ai?subject=${encodeURIComponent(`Re: ${project.title}`)}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-violet-300 hover:text-violet-200 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 hover:border-violet-400 rounded-md px-4 py-2 transition-all"
          >
            Let&apos;s discuss this &rarr;
          </a>
        </div>
      </div>
    </dialog>
  );
}
