import { renderFromString } from "@uqds/test-utils";
import accordionMarkup from "./fixtures/markup.html";
import Accordion from "../js/accordion.js";
import { fireEvent, screen, waitFor } from "@testing-library/dom";

describe("Accordion behaviour", () => {
  it("Should expand and collapse", async () => {
    const container = renderFromString(accordionMarkup);
    // Intentionally initialize twice to ensure re-entrant.
    new Accordion();
    new Accordion();
    fireEvent.click(screen.getByRole("button", { name: "Title 1" }));
    const accordion1 = screen
      .getByText("Accordion 1", {
        exact: false,
      })
      .closest(".uq-accordion__content");
    expect(
      container.querySelector(".uq-accordion__content-wrapper")
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(accordion1).toHaveAttribute("aria-hidden", "false");
    });
    const accordion2 = screen
      .getByText("Accordion 2", {
        exact: false,
      })
      .closest(".uq-accordion__content");
    expect(accordion2).toHaveAttribute("aria-hidden", "true");
    await fireEvent.click(screen.getByRole("button", { name: "Title 2" }));
    await waitFor(() => {
      expect(accordion1).toHaveAttribute("aria-hidden", "true");
    });
    expect(accordion2).toHaveAttribute("aria-hidden", "false");
  });
});
