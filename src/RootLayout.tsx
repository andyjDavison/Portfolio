import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

export function RootLayout() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <Navbar />
      <main className="flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}
