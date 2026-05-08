import projectData from "../data/projectData";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <section className="container column" id="projects-page">
      <h1 className="page-header">PROJECTS</h1>
      <div className="container row" id="projects-container">
        {/* {projectData.map((project) => (
          <ProjectItem
            imgSource={project.imgSource}
            header={project.header}
            desc={project.desc}
            link={project.link}
          />
        ))} */}
      </div>
    </section>
  );
}
