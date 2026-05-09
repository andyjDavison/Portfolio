import {
  Briefcase,
  ChevronDown,
  GraduationCapIcon,
  LayoutDashboard,
  SwordIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router";
import { Avatar, AvatarImage } from "./ui/avatar";
import avatar from "../assets/img_1.jpg";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { AboutDropdown } from "./about/AboutDropdown";

export function Navbar() {
  return (
    <NavigationMenu className="sticky top-0 z-40 bg-white mx-auto border rounded-3xl">
      <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
        <NavigationMenuItem className="font-bold flex">
          <Link to="/" className="ml-2 font-bold text-xl flex">
            <SwordIcon />
            Andrew Davison
          </Link>
        </NavigationMenuItem>
        <nav className="hidden md:flex gap-2">
          <Link to="/work">
            <Button variant="ghost" className="text-md">
              <Briefcase />
              Work
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="ghost" className="text-md">
              <LayoutDashboard />
              Projects
            </Button>
          </Link>
          <Link to="/education">
            <Button variant="ghost" className="text-md">
              <GraduationCapIcon />
              Education
            </Button>
          </Link>
        </nav>

        <div className="hidden md:flex gap-2">
          <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Avatar size="lg" className="hover:cursor-pointer">
                <AvatarImage src={avatar} />
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-50 flex-col gap-0.5">
              <AboutDropdown />
            </HoverCardContent>
          </HoverCard>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
