import {
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
import { ProjectsDropdown } from "./Projects-Dropdown";

export function Navbar() {
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
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
                <LayoutDashboard />
                Work
              </Button>
            </Link>
            <Link to="/projects">
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Button variant="ghost" className="text-md">
                    <LayoutDashboard />
                    Projects
                    <ChevronDown />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <ProjectsDropdown />
                </HoverCardContent>
              </HoverCard>
            </Link>
            <Link to="/education">
              <Button variant="ghost" className="text-md">
                <GraduationCapIcon />
                Education
              </Button>
            </Link>
          </nav>

          <div className="hidden md:flex gap-2">
            <Avatar size="lg">
              <AvatarImage src={avatar} />
            </Avatar>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
