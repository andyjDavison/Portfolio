import { Link } from "react-router";
import projectData from "@/data/projectData";
import { Button } from "./ui/button";

export function ProjectsDropdown() {
  return (
    <div className="">
      {projectData.map((project) => (
        <Link to={`projects/${project.link}`}>
          <Button variant="ghost">{project.header}</Button>
        </Link>
      ))}
    </div>
  );
}
