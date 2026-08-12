import { Outlet } from "react-router";
import Footer from "./components/Footer";
import NavbarWrapper from "./components/navbar/NavbarWrapper";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <NavbarWrapper />
      <main className="flex flex-1 justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
