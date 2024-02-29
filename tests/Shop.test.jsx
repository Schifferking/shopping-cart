import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Shop from "../src/components/Shop/Shop";

describe("Shop component", () => {
  it('renders "loading..." while loading prop is true', () => {
    render(<Shop products={null} loading={true} error={null} />);
    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();
  });

  it('renders "A network error was encountered." when it receives an Error', () => {
    const serverError = new Error("server error");

    render(<Shop products={null} loading={false} error={serverError} />);
    const errorMessage = screen.getByText("A network error was encountered.");

    expect(errorMessage).toBeInTheDocument();
  });

  it("renders a ul with 5 li elements when products is not null", () => {
    const products = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const productCounts = [
      { id: 1, productCount: "0" },
      { id: 2, productCount: "0" },
      { id: 3, productCount: "0" },
      { id: 4, productCount: "0" },
      { id: 5, productCount: "0" },
    ];

    render(
      <Shop
        productCounts={productCounts}
        products={products}
        loading={false}
        error={null}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toEqual(5);
  });
});
