import MobileNavbar from "./MobileNavbar";
import { Navbar } from "./Navbar";

export default function NavbarWrapper() {
  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
