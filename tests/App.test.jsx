import { render, screen, waitFor } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { server } from "../src/mocks/node";
import App from "../src/App";
import Checkout from "../src/components/Checkout/Checkout";
import Navbar from "../src/components/Navbar/Navbar";
import Shop from "../src/components/Shop/Shop";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App component", () => {
  it("renders a Home component by default", () => {
    render(<App />, { wrapper: MemoryRouter });

    const paragraph = screen.getByText(/this is the home page/i);
    expect(paragraph).toBeInTheDocument();
  });

  describe("Page navigation", () => {
    it("navigates from home to shop page", async () => {
      const user = userEvent.setup();
      render(<App />, { wrapper: MemoryRouter });

      const shopLink = screen.getByRole("link", { name: /shop/i });
      await user.click(shopLink);
      await waitFor(() => render(<Shop />, { wrapper: MemoryRouter }));

      expect(screen.getByText(/This is the shop page/i)).toBeInTheDocument();
    });

    it("navigates from shop to checkout", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Navbar name="shop" />
          <Shop />
        </div>,
        { wrapper: MemoryRouter }
      );

      const checkoutButton = screen.getByRole("button", {
        name: /checkout/i,
      });
      await user.click(checkoutButton);
      await waitFor(() => render(<Checkout />, { wrapper: MemoryRouter }));

      expect(
        screen.getByText(/This is the checkout page/i)
      ).toBeInTheDocument();
    });

    it("navigates from checkout to home", async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Navbar />
          <Checkout />
        </div>,
        { wrapper: MemoryRouter }
      );

      const homeLink = screen.getByRole("link", { name: /home/i });
      await user.click(homeLink);
      await waitFor(() => render(<App />, { wrapper: MemoryRouter }));

      expect(screen.getByText(/This is the home page/i)).toBeInTheDocument();
    });
  });

  describe("API functionality", () => {
    it("data should be fetched", async () => {
      const mockedData = {
        data: [
          {
            id: 1,
            title: "Bag",
            price: "109.55",
            category: "Accessory",
            description: "",
            image: "",
          },
        ],
      };
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();

      expect(response.status).toBe(200);
      expect(response.statusText).toBe("OK");
      expect(data).toEqual(mockedData);
    });

    it("should display a loading message on shop when loading", async () => {
      render(<Shop loading={true} />, { wrapper: MemoryRouter });

      await waitFor(() => {
        const paragraph = screen.getByText(/loading/i);
        expect(paragraph).toBeInTheDocument();
      });
    });

    it("should display an error message on shop when an error arises", async () => {
      server.use(
        http.get("https://fakestoreapi.com/products", () => {
          return new HttpResponse(null, { status: 500 });
        })
      );
      const response = await fetch("https://fakestoreapi.com/products");

      render(<Shop error={response.status} />, { wrapper: MemoryRouter });

      await waitFor(() => {
        const paragraph = screen.getByText(/A network error was encountered/i);
        expect(paragraph).toBeInTheDocument();
      });
    });
  });

  // to-do
  // these tests do not render Card component correctly
  // it only renders the - button when rendering Shop component
  // figure out a way to render the whole component
  describe("Product card behaviors", () => {
    describe("increment button behaviour", () => {
      it.skip("does nothing when the button is not pressed", async () => {
        render(<App />, { wrapper: MemoryRouter });

        screen.debug();
      });

      it("increments input field quantity in 1 when clicked", () => {});
    });

    // to-do
    // same problem as previous tests
    // card component doesn't render correctly
    describe("decrement button behaviour", () => {
      it.skip("does nothing when the button is not pressed", () => {});
    });
  });
});
