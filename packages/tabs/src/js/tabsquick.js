/**
 * @file
 */

(function ($) {
  $(document).ready(function () {
    $(document).foundation();
    opentab();
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 1);
  });

  function opentab() {
    if (!window.location.hash) {
      $('div.tabs__content > div:first-child').addClass('active');
      $('ul.tabs__list > li:first-child').addClass('active');
    }
  }
})(jQuery);
