import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-2">
          ▸ Catalog
        </h2>
        <hr className="separator mb-10" />

        <div className="space-y-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
