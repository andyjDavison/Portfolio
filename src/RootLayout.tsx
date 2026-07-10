import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

export function RootLayout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <Navbar />
      <main className="flex flex-1 justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
