import { renderFromString } from "../../../../tests/jest/jest-dom";
import Alerts from "../js/alerts.js";
import { waitFor, screen, fireEvent, getByRole } from "@testing-library/dom";

const headerMarkup = `<div class="uq-alerts-global-container" data-uri="http://localhost:3000/api/v1/alerts.json">this gets removed on render</div>`;

describe("Alert close behaviour", () => {
  afterAll(() => {
    Object.keys(window.localStorage)
      .filter((key) => key.includes("alert-dismissed"))
      .forEach((key) => window.localStorage.removeItem(key));
  });

  it("Should be removed on close", async () => {
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    let alerts;
    await waitFor(() => {
      alerts = screen.getAllByRole("alert");
      expect(alerts).toHaveLength(2);
    });
    fireEvent.click(getByRole(alerts[0], "button", { name: "Close" }));
    await waitFor(() => {
      expect(alerts[0]).not.toBeInTheDocument();
    });
  });

  it("Removal should persist", async () => {
    const container = renderFromString(headerMarkup);
    const el = container.querySelector(".uq-alerts-global-container");
    new Alerts(el);
    await waitFor(() => {
      expect(el).not.toHaveTextContent("this gets removed on render");
    });
    expect(screen.getAllByRole("alert").length).toBe(1);
    expect(container.body.innerHTML).toMatchSnapshot();
  });

  it("Dismissals can be ignored", async () => {
    // Dismissed one hour before the time in the fixture.
    window.localStorage.setItem(
      `alert-dismissed-8da600f4-0a64-4df5-8bc5-a410d7496a26`,
      String(1652937962 - 3600),
    );
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    await waitFor(() => {
      expect(screen.getAllByRole("alert")).toHaveLength(2);
    });
  });
});

describe("Alert default behaviour", () => {
  beforeEach(() => {
    Object.keys(window.localStorage)
      .filter((key) => key.includes("alert-dismissed"))
      .forEach((key) => window.localStorage.removeItem(key));
  });

  it("Should load from json", async () => {
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    let alerts;
    await waitFor(() => {
      // 1 item is filtered out.
      alerts = screen.getAllByRole("alert");
      expect(alerts).toHaveLength(2);
    });
    expect(alerts[0]).toHaveTextContent(
      "You're doing a great job. Keep it up!",
    );
    expect(alerts[1]).toHaveTextContent("Danger!");
    expect(container.body.innerHTML).toMatchSnapshot();
  });

  it("Should be removed on close", async () => {
    const now = Math.round(new Date().getTime() / 1000);
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    let alerts;
    await waitFor(() => {
      // 1 item is filtered out.
      alerts = screen.getAllByRole("alert");
      expect(alerts).toHaveLength(2);
    });
    expect(alerts[0]).toHaveTextContent(
      "You're doing a great job. Keep it up!",
    );
    fireEvent.click(getByRole(alerts[0], "button", { name: "Close" }));
    await waitFor(() => {
      expect(alerts[0]).not.toBeInTheDocument();
    });
    expect(container.body.innerHTML).toMatchSnapshot();
    expect(
      parseInt(
        window.localStorage.getItem(
          `alert-dismissed-8da600f4-0a64-4df5-8bc5-a410d7496a26`,
        ),
      ),
    ).toBeGreaterThanOrEqual(now);
  });

  it("Should match on partial URIs", async () => {
    window.location = new URL("http://localhost:3000/stuff/i-wish-i-had-known");
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    await waitFor(() => {
      // Should filter out the negated version.
      expect(screen.getAllByRole("alert")).toHaveLength(2);
    });
    expect(container).toMatchSnapshot();
  });

  it("Should not match on child pages", async () => {
    window.location = new URL("http://uq.edu.au/stuff/i-wish-i-had-known");
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector(".uq-alerts-global-container"));
    await waitFor(() => {
      // Should filter out the negated version.
      expect(screen.getAllByRole("alert")).toHaveLength(2);
    });
    expect(container).toMatchSnapshot();
  });
});
