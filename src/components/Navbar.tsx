import {
  Briefcase,
  GraduationCapIcon,
  LayoutDashboard,
  SwordIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenuItem } from "./ui/navigation-menu";
import { Link } from "react-router";

export function Navbar() {
  return (
    <div className="flex justify-center sticky top-1 z-40 bg-black border rounded-3xl mx-12">
      <div className="h-14 flex justify-between items-center w-full mx-2">
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
      </div>
    </div>
  );
}
