import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import Card from "../src/components/Card/Card";

describe("Card component", () => {
  it("renders a div with a card class", () => {
    const product = { image: "" };

    render(<Card product={product} />);

    const divCard = screen.getByTestId("card-container");
    expect(divCard).toHaveClass("card");
  });

  describe("renders a form with", () => {
    it('one button with the text "-"', () => {
      const product = { image: "" };

      render(<Card product={product} />);

      const decrementButton = screen.getByRole("button", { name: "-" });
      expect(decrementButton).toBeInTheDocument();
    });

    it('one numeric input field with a value of "0"', () => {
      const product = { image: "" };
      const productCount = "0";

      render(<Card product={product} productCount={productCount} />);

      const numericInput = screen.getByRole("spinbutton");
      expect(numericInput).toBeInTheDocument();
      expect(numericInput.value).toEqual("0");
    });

    it('one button with the text "+"', () => {
      const product = { image: "" };

      render(<Card product={product} />);

      const incrementButton = screen.getByRole("button", { name: "+" });
      expect(incrementButton).toBeInTheDocument();
    });

    it('one button with the text "Send to cart"', () => {
      const product = { image: "" };

      render(<Card product={product} />);

      const submitButton = screen.getByRole("button", { name: "Send to cart" });
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("handleSubmit function", () => {
    it("is called when button is clicked and returns undefined", async () => {
      const user = userEvent.setup();
      const handleSubmitMock = vi.fn((e) => {
        e.preventDefault();
        return undefined;
      });
      const product = { image: "" };

      render(<Card product={product} handleSubmit={handleSubmitMock} />);
      const submitButton = screen.getByRole("button", { name: "Send to cart" });
      await user.click(submitButton);

      expect(handleSubmitMock).toHaveBeenCalled();
      expect(handleSubmitMock).toReturn(undefined);
    });

    it("calls another function to update total product count", async () => {
      const user = userEvent.setup();
      const calculateProductCountMock = vi.fn(() => 0);
      const handleSubmitMock = vi.fn((e) => {
        e.preventDefault();
        return calculateProductCountMock();
      });
      const product = { image: "" };

      render(<Card product={product} handleSubmit={handleSubmitMock} />);
      const submitButton = screen.getByRole("button", { name: "Send to cart" });
      await user.click(submitButton);

      expect(calculateProductCountMock).toHaveBeenCalled();
    });
  });
});
