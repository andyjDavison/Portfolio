import {
  Briefcase,
  ChevronDown,
  GraduationCapIcon,
  LayoutDashboard,
  SwordIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenuItem } from "./ui/navigation-menu";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "./ui/avatar";
import avatar from "../assets/img_1.jpg";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { AboutDropdown } from "./about/AboutDropdown";

export function Navbar() {
  return (
    <div className="flex justify-center sticky top-1 z-40 bg-black border rounded-3xl mx-12">
      <div className="h-14 flex justify-between items-center w-full mx-2">
        <NavigationMenuItem className="font-bold flex">
          <Link
            to="/"
            className="ml-2 font-bold text-xl flex text-white items-center"
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

        <div className="hidden md:flex gap-2">
          <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Avatar
                size="lg"
                className="hover:cursor-pointer border-white border-2"
              >
                <AvatarImage src={avatar} />
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-50 flex-col gap-0.5">
              <AboutDropdown />
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
