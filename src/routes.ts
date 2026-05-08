import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { RootLayout } from "./RootLayout";
import Education from "./components/education/Education";
import { BeaconOfHope } from "./components/projects/BeaconOfHope";
import { MovieReview } from "./components/projects/MovieReview";
import { Portfolio } from "./components/projects/Portfolio";
import { Leetcode } from "./components/projects/Leetcode";
import { PicoCtf } from "./components/projects/PicoCtf";
import { NeoVim } from "./components/projects/NeoVim";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      {
        path: "projects",
        children: [
          { index: true, Component: Projects },
          { path: "beacon-of-hope", Component: BeaconOfHope },
          { path: "movie-review-app", Component: MovieReview },
          { path: "portfolio", Component: Portfolio },
          { path: "leetcode", Component: Leetcode },
          { path: "picoctf", Component: PicoCtf },
          { path: "neovim", Component: NeoVim },
        ],
      },
      { path: "education", Component: Education },
      { path: "work", Component: Education },
    ],
  },
]);
