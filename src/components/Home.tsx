import { Link } from "react-router";
import { Button } from "./ui/button";
import { Briefcase, GraduationCapIcon, LayoutDashboard } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 gap-y-12 mx-20">
      <div className="flex w-full flex-col justify-center items-center align-middle gap-5 max-lg:items-center lg:col-span-3 h-full">
        <div className="flex gap-2 items-center flex-col">
          <p className="z-10 text-2xl leading-[1.29167] font-bold text-balance max-lg:text-center sm:text-xl lg:text-2xl">
            Software Engineer & Consultant
          </p>
          <h1 className="z-10 text-4xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl">
            Andrew Davison's Portfolio
          </h1>
        </div>

        <p className="text-muted-foreground max-w-xl text-xl max-lg:text-center text-center">
          A showcase of my work, projects, and education. Explore my portfolio
          to see what I've been up to and learn more about me!
        </p>
      </div>
      <div className="relative flex items-start justify-start gap-6">
        <Link to="/work">
          <Button className="flex gap-2 py-4 items-start justify-start group relative hover:scale-105 w-45 h-80 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-2">
                <Briefcase className="size-6" />
                <span className="text-xl">Work</span>
              </div>
              <span className="text-xs text-wrap">
                Checkout what I currently do for work!
              </span>
            </div>
          </Button>
        </Link>
        <Link to="/projects">
          <Button className="flex gap-2 py-4 items-start justify-start group relative hover:scale-105 w-45 h-80 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-2">
                <LayoutDashboard className="size-6" />
                <span className="text-xl">Projects</span>
              </div>
              <span className="text-xs text-wrap">
                Checkout some cool projects I've made!
              </span>
            </div>
          </Button>
        </Link>
        <Link to="/education">
          <Button className="flex gap-2 py-4 items-start justify-start group relative hover:scale-105 w-45 h-80 overflow-hidden rounded-xl text-base before:absolute before:inset-0 before:rounded-[inherit] before:transition-[background-position_0s_ease] before:duration-1000">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-row gap-2">
                <GraduationCapIcon className="size-6" />
                <span className="text-xl">Education</span>
              </div>
              <span className="text-xs text-wrap">
                Checkout some of the classes I took in school!
              </span>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
