import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { RootLayout } from "./RootLayout";
import { Education } from "./components/education/Education";
import { Work } from "./components/work/WorkPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "projects",
        Component: Projects,
      },
      { path: "education", Component: Education },
      { path: "work", Component: Work },
    ],
  },
]);
