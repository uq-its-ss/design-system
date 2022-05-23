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
  init() {
    fetch(this.uri)
      .then(resp => resp.json())
      .then(json => {
        this.el.innerHTML = '';
        Alerts.filter(json.sitewideAlerts).forEach(alert => {
          const alertEl = document.createElement('div');
          alertEl.innerHTML = alert.renderedAlert;
          if (alert.dismissible) {
            const close = alertEl.querySelector('.uq-alert__close');
            if (close) {
              close.addEventListener('click', (el) => {
                window.localStorage.setItem(
                  `alert-dismissed-${alert.uuid}`,
                  String(Math.round(new Date().getTime() / 1000)),
                );
                alertEl.remove();
              });
            }
          }
          this.el.appendChild(alertEl);
        });
      })
  }
  static filter(alerts) {
    return alerts.filter(alert => {
      const dismissedAtTimestamp = Number(
        window.localStorage.getItem(`alert-dismissed-${alert.uuid}`),
      );

      if (dismissedAtTimestamp > alert.dismissalIgnoreBefore) {
        return false;
      }
      if (!alert.showOnPages.length) {
        return true;
      }
      return alert.showOnPages.find(page => {
        const quoted = `${page}`
          .replace(new RegExp(`[.\\\\+?\\[^\\]$(){}=!<>|:\\-]`, 'g'), '\\$&');
        return window.location.href.match(new RegExp(quoted.replaceAll('*', '.*')));
      }) !== undefined;
    })
  }
}

export default Alerts;