'use strict';

/**
 * @file
 * Responsible for fetching remote list of alerts and building the markup.
 */
class Alerts {
  constructor(el) {
    this.uri = el.dataset.uri;
    this.el = el;
    this.init();
  }
  async init() {
    const response = await fetch(this.uri);
    const json = await response.json();
    Alerts.filter(json).forEach(alert => {
      const alertEl = document.createElement('div');
      div.outerHTML = alert.renderedOutput;
      this.el.appendChild(alertEl);
    });
  }
  static filter(json) {
    const uri = `${window.location.hostname}/${window.location.pathname}`
    return json.filter(alert => {
      if (!alert.pages) {
        return true;
      }
      return alert.pages.find(page => uri.match(new RegExp(page))) !== undefined;
    })
  }
}
