import { renderFromString } from "../../../../tests/jest/jest-dom";
import headerMarkup from "@design-system-output/header/header.html"
import newHeader from "../js/header.js";
import { fireEvent, waitFor, getByRole, getAllByRole, getByLabelText } from "@testing-library/dom"

describe('Header', () => {
  it('Should toggle search form', async () => {
    const container = renderFromString(headerMarkup);
    const searchBlock = container.querySelector('.uq-header__search');
    new newHeader();
    const searchToggle = getAllByRole(container,'button', { name:'Search' });
    expect(searchToggle).toHaveLength(2);
    const searchInput = getByLabelText(container,'Search term');
    expect(searchBlock).not.toHaveClass('uq-header__search--is-open');
    fireEvent.click(searchToggle[0]);
    await waitFor(() => {
      expect(searchToggle[0]).toHaveTextContent('Close');
      expect(searchToggle[0]).not.toHaveTextContent('Search');
      expect(searchInput).toHaveFocus();
    })
    expect(searchBlock).toHaveClass('uq-header__search--is-open');
    fireEvent.click(searchToggle[0]);
    await waitFor(() => {
      expect(searchToggle[0]).toHaveTextContent('Search');
      expect(searchToggle[0]).not.toHaveTextContent('Close');
    })
    expect(searchBlock).not.toHaveClass('uq-header__search--is-open');
  })
  it('Should toggle menu', async () => {
    const container = renderFromString(headerMarkup);
    new newHeader();
    const menuToggle = getByRole(container, 'button', { name: 'Menu' });
    const searchToggle = getAllByRole(container,'button', { name:'Search' });
    expect(searchToggle).toHaveLength(2);
    const searchBlock = container.querySelector('.uq-header__search');
    const body = container.querySelector('body');
    expect(body).not.toHaveClass('no-scroll');

    fireEvent.click(searchToggle[0]);
    await waitFor(() => {
      expect(searchToggle[0]).toHaveTextContent('Close');
      expect(searchBlock).toHaveClass('uq-header__search--is-open');
    });
    fireEvent.click(menuToggle);
    await waitFor(() => {
      expect(body).toHaveClass('no-scroll');
    })
    expect(searchBlock).not.toHaveClass('uq-header__search--is-open');
  })
})