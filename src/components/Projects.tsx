import { projects } from "../projects"
import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
  return (
    <section id="projects" className="flex flex-col bg-charcoal w-full px-9">
      <h2 className="text-3xl font-bold text-steel text-center py-9 text-shadow-steel-glow">
        Projects
      </h2>
      {projects.map((project, i) => (
        <ProjectItem key={project.name} {...project} invert={i % 2 !== 0} />
      ))}
    </section>
  )
}
