import { afterEach, afterAll, beforeAll, vi } from "vitest";
import { server } from "../src/mocks/node";
import "@testing-library/jest-dom/vitest";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
