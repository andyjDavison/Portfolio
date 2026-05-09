import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

export function RootLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
