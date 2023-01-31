import React from "react";
import { getByText, render } from "@testing-library/react";

import Home from "./Home";

describe("Home", () => {
  it("renders the component", () => {
    const { baseElement } = render(<Home />);
    console.log(baseElement);
    const element = getByText(baseElement, "Home");

    expect(element).toBeInTheDocument();
  });
});
