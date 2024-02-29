import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "../src/components/ErrorPage/ErrorPage";

describe("ErrorPage component", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading").textContent).toMatch(
      /Oops, this page doesn't exist/i
    );
  });

  it("renders correct link", () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("link").textContent).toMatch(
      /Click here to return to home/i
    );
  });
});
