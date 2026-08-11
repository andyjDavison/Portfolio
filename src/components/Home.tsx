import { Link } from "react-router";
import { Button } from "./ui/button";
import { Briefcase, GraduationCapIcon, LayoutDashboard } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-2 gap-y-4 lg:gap-y-6">
      <div className="flex flex-col w-full justify-center items-center align-middle gap-2 lg:gap-5 max-lg:items-center lg:col-span-3 h-full">
        <div className="flex gap-2 items-center flex-col">
          <p className="z-10 text-md leading-[1.29167] font-bold text-balance max-lg:text-center lg:text-2xl">
            Software Engineer & Consultant
          </p>
          <h1 className="z-10 text-2xl leading-[1.29167] font-bold text-balance max-lg:text-center lg:text-5xl">
            Andrew Davison's Portfolio
          </h1>
        </div>

        <p className="lg:w-1/2 text-muted-foreground text-xs lg:text-xl max-lg:text-center text-center">
          A showcase of my work, projects, and education. Explore my portfolio
          to see what I've been up to and learn more about me!
        </p>
      </div>
      <div className="flex relative w-full items-center justify-center gap-2 lg:gap-6">
        <Link to="/work" className="lg:w-1/9">
          <Button className="flex items-center justify-start group relative lg:hover:scale-105 size-sm lg:w-full lg:h-10 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-row items-center gap-2">
              <Briefcase className="size-4 lg:size-5" />
              <span className="flex items-center text-xs lg:text-lg">Work</span>
            </div>
          </Button>
        </Link>
        <Link to="/projects" className="lg:w-1/9">
          <Button className="flex items-center justify-start group relative lg:hover:scale-105 size-sm lg:w-full lg:h-10 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-row items-center gap-2">
              <LayoutDashboard className="size-4 lg:size-5" />
              <span className="flex items-center text-xs lg:text-lg">
                Projects
              </span>
            </div>
          </Button>
        </Link>
        <Link to="/education" className="lg:w-1/9">
          <Button className="flex items-center justify-start group relative lg:hover:scale-105 size-sm lg:w-full lg:h-10 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-row items-center gap-2">
              <GraduationCapIcon className="size-5 lg:size-6" />
              <span className="flex items-center text-xs lg:text-lg">
                Education
              </span>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
