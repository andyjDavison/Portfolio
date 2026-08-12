import {
  Briefcase,
  GraduationCapIcon,
  LayoutDashboard,
  SwordIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { NavigationMenuItem } from "../ui/navigation-menu";
import { Link } from "react-router";
import { useState } from "react";
import Hamburger from "../ui/hamburger";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-4 left-4 z-50 flex h-14 items-center overflow-hidden rounded-2xl bg-black shadow-xl transition-[width] duration-300 ease-in-out ${
        isOpen ? "w-[calc(100%-2rem)]" : "w-14"
      }`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center h-14 w-14 pl-4.5 rounded-2xl bg-black/90 gap-2 shadow-sm backdrop-blur-sm hover:cursor-pointer"
      >
        <Hamburger isOpen={isOpen} />
        {isOpen && (
          <h1 className="whitespace-nowrap text-white text-lg font-bold">
            Andrew Davison
          </h1>
        )}
      </button>
      <nav
        className={`ml-auto flex shrink-0 items-center bg-black gap-5 pr-8 transition-opacity duration-200 ease-in-out ${
          isOpen ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
        }`}
      >
        <Link to="/work" className="text-white">
          <Button variant="ghost" className="text-md">
            <Briefcase />
            Work
          </Button>
        </Link>
        <Link to="/projects" className="text-white">
          <Button variant="ghost" className="text-md">
            <LayoutDashboard />
            Projects
          </Button>
        </Link>
        <Link to="/education" className="text-white">
          <Button variant="ghost" className="text-md">
            <GraduationCapIcon />
            Education
          </Button>
        </Link>
      </nav>
      {/* <div className="h-14 flex justify-between items-center w-full mx-2">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex text-white items-center gap-2"
            >
              <SwordIcon className="text-md" />
              Andrew Davison
            </Link>
          </NavigationMenuItem>
          <nav className="hidden md:flex gap-2">
            <Link to="/work" className="text-white">
              <Button variant="ghost" className="text-md">
                <Briefcase />
                Work
              </Button>
            </Link>
            <Link to="/projects" className="text-white">
              <Button variant="ghost" className="text-md">
                <LayoutDashboard />
                Projects
              </Button>
            </Link>
            <Link to="/education" className="text-white">
              <Button variant="ghost" className="text-md">
                <GraduationCapIcon />
                Education
              </Button>
            </Link>
          </nav>
        </div> */}
    </div>
  );
}
