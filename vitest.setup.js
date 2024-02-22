import "@testing-library/jest-dom/vitest";
import { server } from "./tests/msw/server";

beforeEach(() => {
  document.body.innerHTML = "";
});

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
