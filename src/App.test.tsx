import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App test", () => {
  describe("Sidebar", () => {
    render(<App></App>);
    it.each(["About", "Education", "Projects"])(
      "should render the ",
      (sidebarNavItem) => {
        expect(screen.getByText(sidebarNavItem)).toBeDefined();
      },
    );
  });
});
