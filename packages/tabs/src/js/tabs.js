$(function () {
  var fn = function () {
      // Tabs
      // On load show only first tab
      $('.content', '.tabs-content').removeClass('active').css('display', 'none');
      $('.content:first-child', '.tabs-content').addClass('active').css('display', 'block');

      // When user clicks on tabs link
      $('.tabs').on('click', 'a', function (event) {

          var currentPanel = '#' + this.href.split('#')[1];
          var currentElement = $(currentPanel);

          $(this).parents('.tabs').next('.tabs-content').children('.content').removeClass('active').css('display', 'none');
          currentElement.addClass('active').css('display', 'block');
      });
  };
  if (typeof window.Ember !== 'undefined') {
      window.UQComponents = window.UQComponents || [];
      window.UQComponents.push(fn);
  } else {
      fn();
  }
});