import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../src/components/Home/Home";

describe("Home component", () => {
  it("renders this is the home page.", () => {
    render(<Home />);

    expect(screen.getByText(/this is the home page./i)).toBeInTheDocument();
  });
});
