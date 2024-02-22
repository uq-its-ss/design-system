import { renderFromString } from "../../../../tests/jest/jest-dom";
import Accordion from "../js/accordion.js";
import { fireEvent, screen, waitFor } from "@testing-library/dom";

const accordionMarkup = `
<div class="uq-accordion" aria-label="Accordion button group" role="presentation">
    <div class="uq-accordion__item">
        <button class="uq-accordion__toggle" aria-controls="content-1" aria-expanded="false" id="accordion-title-1">Title 1</button>
        <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-1" aria-labelledby="accordion-title-1">
            <p>Accordion 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
        </div>
    </div>
    <div class="uq-accordion__item">
        <button class="uq-accordion__toggle" aria-controls="content-2" aria-expanded="false" id="accordion-title-2">Title 2</button>
        <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-2" aria-labelledby="accordion-title-2">
            <p>Accordion 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>
        </div>
    </div>
    <div class="uq-accordion__item">
        <button class="uq-accordion__toggle" aria-controls="content-3" aria-expanded="false" id="accordion-title-3">Title 3</button>
        <div class="uq-accordion__content" role="region" aria-hidden="true" id="content-3" aria-labelledby="accordion-title-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.</p>

            <p>Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.</p>
        </div>
    </div>
</div>
`;

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
