import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const isOdd = projects.length % 2 !== 0;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-2xl tracking-widest uppercase text-violet-400 mb-4">
          ▸ Catalog
        </h2>
        <hr className="separator mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={
                isOdd && i === projects.length - 1
                  ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:mx-auto"
                  : ""
              }
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
