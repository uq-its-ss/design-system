import { renderFromString } from "@uqds/test-utils";
import headerMarkup from "../__tests__/fixtures/markup.html";
import Alerts from "../js/alerts.js";
import { waitFor, screen, fireEvent } from "@testing-library/dom"

describe('Alert close behaviour', () => {
  afterAll(() => {
    Object.keys(window.localStorage).filter(key => key.includes('alert-dismissed')).forEach(key => window.localStorage.removeItem(key))
  })
  it('Should be removed on close', async () => {
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector('.uq-alerts-global-container'));
    let alerts;
    await waitFor(() => {
      alerts = screen.getAllByRole('alert');
      expect(alerts).toHaveLength(1);
    })
    fireEvent.click(screen.getByRole('button', {name: 'Close'}))
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    })
  });
  it('Removal should persist', async () => {
    const container = renderFromString(headerMarkup);
    const el = container.querySelector('.uq-alerts-global-container');
    new Alerts(el);
    await waitFor(() => {
      expect(el).not.toHaveTextContent('this gets removed on render');
    })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(container.body.innerHTML).toMatchSnapshot();
  });
  it('Dismissals can be ignored', async () => {
    // Dismissed one hour before the time in the fixture.
    window.localStorage.setItem(`alert-dismissed-8da600f4-0a64-4df5-8bc5-a410d7496a26`, String(1652937962 - 3600));
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector('.uq-alerts-global-container'));
    await waitFor(() => {
      expect(screen.getAllByRole('alert')).toHaveLength(1);
    })
  });
});
describe('Alert default behaviour', () => {
  beforeEach(() => {
    Object.keys(window.localStorage).filter(key => key.includes('alert-dismissed')).forEach(key => window.localStorage.removeItem(key))
  })
  it('Should load from json', async () => {
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector('.uq-alerts-global-container'));
    let alerts;
    await waitFor(() => {
      // 1 item is filtered out.
      alerts = screen.getAllByRole('alert');
      expect(alerts).toHaveLength(1);
    })
    expect(alerts[0]).toHaveTextContent("You're doing a great job. Keep it up!")
    expect(container.body.innerHTML).toMatchSnapshot();
  });
  it('Should be removed on close', async () => {
    const now = Math.round(new Date().getTime() / 1000);
    const container = renderFromString(headerMarkup);
    new Alerts(container.querySelector('.uq-alerts-global-container'));
    let alerts;
    await waitFor(() => {
      // 1 item is filtered out.
      alerts = screen.getAllByRole('alert');
      expect(alerts).toHaveLength(1);
    })
    expect(alerts[0]).toHaveTextContent("You're doing a great job. Keep it up!")
    fireEvent.click(screen.getByRole('button', {name: 'Close'}))
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    })
    expect(container.body.innerHTML).toMatchSnapshot();
    expect(parseInt(window.localStorage.getItem(`alert-dismissed-8da600f4-0a64-4df5-8bc5-a410d7496a26`))).toBeGreaterThanOrEqual(now);
  });
  it('Should match on partial URIs', async () => {
    const container = renderFromString(headerMarkup);
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://127.0.0.1:8080/stuff/i-wish-i-had-known'
      }
    });
    new Alerts(container.querySelector('.uq-alerts-global-container'));
    await waitFor(() => {
      expect(screen.getAllByRole('alert')).toHaveLength(2);
    })
    expect(container).toMatchSnapshot();
  });
});
