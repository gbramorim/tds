import React from "react";
import { getByText, render } from "@testing-library/react";

import Weather from "./Weather";

describe("Weather", () => {
  it("renders the component", () => {
    const { baseElement } = render(<Weather />);
    const element = getByText(baseElement, "Weather");

    expect(element).toBeInTheDocument();
  });
});
