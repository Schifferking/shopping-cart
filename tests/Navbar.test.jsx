import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Navbar from "../src/components/Navbar/Navbar";

describe("Navbar component", () => {
  it("renders 2 li elements when name is not shop", () => {
    const name = "home";

    render(
      <MemoryRouter>
        <Navbar name={name} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("listitem").length).toEqual(2);
  });

  it("renders 4 li elements when name is shop and one contains a button", () => {
    const name = "shop";

    render(
      <MemoryRouter>
        <Navbar name={name} />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("listitem").length).toEqual(4);
    expect(
      screen.getByRole("button", { name: "Checkout" })
    ).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    /* this test is done because the mocked function only uses
       the useNavigate hook from react-router-dom
    */
    const name = "shop";
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Navbar name={name} onClick={onClick} />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: "Checkout" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
