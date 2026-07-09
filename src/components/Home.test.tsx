import { providerRender } from "@/utils/test-utils";
import { Home } from "./Home";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("Home", () => {
  providerRender(<Home />);

  it.each([
    { buttonText: "Work", link: "/work" },
    { buttonText: "Projects", link: "/projects" },
    { buttonText: "Education", link: "/edutcation" },
  ])(
    "should render the %p button with the correct link",
    ({ buttonText, link }) => {
      expect(screen.getByRole("link", { name: buttonText })).toHaveAttribute(
        "",
      );
    },
  );
});
