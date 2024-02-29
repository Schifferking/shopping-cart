import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { http, HttpResponse } from "msw";
import useProducts from "../src/hooks/useProducts";
import { server } from "../src/mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useProducts", () => {
  it("hook initial values", () => {
    const { result } = renderHook(useProducts);
    const { products, error, loading } = result.current;
    expect(products).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });

  it("data is fetched", async () => {
    const { result } = renderHook(useProducts);

    await waitFor(() => {
      const { products } = result.current;
      // the expected value of products is the same data fetched
      // that is found in ./src/mocks/handlers
      expect(products).toEqual({
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
      });
    });
  });

  it("loading is true and it changes to false when data is fetched", async () => {
    const { result } = renderHook(useProducts);
    const { loading } = result.current;
    expect(loading).toBe(true);

    await waitFor(() => {
      const { loading } = result.current;
      expect(loading).toBe(false);
    });
  });

  it('throws a "server error" when data can\'t be fetched', async () => {
    server.use(
      http.get("https://fakestoreapi.com/products", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );
    const { result } = renderHook(useProducts);
    const { error } = result.current;
    expect(error).toBe(null);

    await waitFor(() => {
      const { error } = result.current;
      expect(error).toEqual(Error("server error"));
    });
  });
});
