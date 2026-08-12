interface HamburgerProps {
  isOpen: boolean;
}

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div className="flex flex-col gap-1.25">
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
    </div>
  );
}
