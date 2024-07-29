import React from "react";
import projectData from "../data/projectData";
import ProjectItem from "./ProjectItem";

function Projects() {

    return(
        <section className="container column" id="projects-page">
            <h1 className="page-header">PROJECTS</h1>
            {
                projectData.map(project => (
                    <ProjectItem
                        imgSource={project.imgSource}
                        header={project.header}
                        desc={project.desc}
                        link={project.link}
                    />
                ))
            }
        </section>
    )
}

export default Projects