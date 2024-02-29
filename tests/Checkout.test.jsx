import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Checkout from "../src/components/Checkout/Checkout";

describe("Checkout component", () => {
  it('renders the text "Product count: 0" when passing "0" as product count prop', () => {
    render(<Checkout productCount={0} />);

    expect(screen.getByText(/product count: 0/i)).toBeInTheDocument();
  });
});
