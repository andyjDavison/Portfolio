import React, { type ReactElement } from "react";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router";
import { router } from "@/routes";

function Providers() {
  return <RouterProvider router={router} />;
}

export function providerRender(ui: ReactElement) {
  render(ui, { wrapper: Providers });
}
