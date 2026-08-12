import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Projects } from "./components/projects/Projects";
import { RootLayout } from "./RootLayout";
import { Education } from "./components/education/Education";
import { Work } from "./components/work/WorkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    Component: RootLayout,
    children: [
      {
        path: "projects",
        Component: Projects,
      },
      { path: "education", Component: Education },
      { path: "work", Component: Work },
    ],
  },
]);
