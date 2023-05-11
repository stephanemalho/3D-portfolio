import { projects } from "../../constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
