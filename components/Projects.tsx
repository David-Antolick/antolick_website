import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ Projects
        </h2>
        <hr className="separator mb-6" />

        <div className="space-y-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
