import React from "react";
import { render, screen } from "test-utils";

import Layout from "./Layout";

describe("Layout", () => {
  it("shows the name", () => {
    render(<Layout />);

    expect(screen.getAllByText("Unicorn")[0]).toBeInTheDocument();
  });
});
