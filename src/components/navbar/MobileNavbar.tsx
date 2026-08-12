import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { Briefcase, GraduationCapIcon, LayoutDashboard } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 left-4 z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-2xl bg-black/90 shadow-sm backdrop-blur-sm"
      >
        <span
          className={`h-0.5 w-5 bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-1.75 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-opacity duration-200 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-y-1.75 -rotate-45" : ""
          }`}
        />
      </Button>

      <div
        className={`fixed inset-0 z-45 bg-white/40 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          aria-hidden={!isOpen}
          className={`fixed top-3 left-3 bottom-2 z-50 rounded-2xl w-2/5 max-w-xs origin-left bg-black shadow-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2 pt-24">
            <Link
              to="/work"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <Button
                variant="ghost"
                className="w-full justify-start pl-4 text-md"
              >
                <Briefcase />
                Work
              </Button>
            </Link>
            <Link
              to="/projects"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <Button
                variant="ghost"
                className="w-full justify-start pl-4 text-md"
              >
                <LayoutDashboard />
                Projects
              </Button>
            </Link>
            <Link
              to="/education"
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <Button
                variant="ghost"
                className="w-full justify-start pl-4 text-md"
              >
                <GraduationCapIcon />
                Education
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
