import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { describe, expect, it } from "vitest";
import { providerRender } from "@/utils/test-utils";

describe("Navbar", () => {
  providerRender(<Navbar />);

  it.each(["Work", "Projects", "Education"])(
    "should render %p button",
    (buttonText) => {
      expect(screen.getByRole("button", { name: buttonText })).toBeDefined();
    },
  );
});
