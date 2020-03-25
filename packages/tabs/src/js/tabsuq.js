/**
 * @file
 */

(function ($, undefined) {
  Drupal.settings.views = Drupal.settings.views || {'ajax_path': '/views/ajax'};

  Drupal.quicktabs = Drupal.quicktabs || {};

  Drupal.quicktabs.getQTName = function (el) {
    return el.id.substring(el.id.indexOf('-') + 1);
  };

  Drupal.behaviors.quicktabs = {
    attach: function (context, settings) {
      $.extend(true, Drupal.settings, settings);
      $('.tabs', context).once(function () {
        Drupal.quicktabs.prepare(this);
      });
    }
  };

  // Setting up the initial behaviours.
  Drupal.quicktabs.prepare = function (el) {
    // el.id format: "quicktabs-$name"
    var qt_name = Drupal.quicktabs.getQTName(el);
    var $ul = $(el).find('ul.tabs__list:first');
    $ul.find('li a').each(function (i, element) {
      element.myTabIndex = i;
      element.qt_name = qt_name;
      var tab = new Drupal.quicktabs.tab(element);
      var parent_li = $(element).parents('li').get(0);
      $(element).once(function () {
        $(this).bind('click', {tab: tab}, Drupal.quicktabs.clickHandler);
      });
    });
  };

  Drupal.quicktabs.clickHandler = function (event) {
    var tab = event.data.tab;
    var element = this;
    // Set clicked tab to active.
    $(this).parents('li').siblings().children('a').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');

    // Hide all tabpages.
    tab.container.children().removeClass('tabs-content__tab-page--active');

    if (!tab.tabpage.hasClass("tabs-content__tab-page")) {
      tab = new Drupal.quicktabs.tab(element);
    }

    tab.tabpage.addClass('tabs-content__tab-page--active');
    return false;
  };

  // Constructor for an individual tab.
  Drupal.quicktabs.tab = function (el) {
    this.element = el;
    this.tabIndex = el.myTabIndex;
    var qtKey = 'qt_' + el.qt_name;
    var i = 0;
    for (i = 0; i < Drupal.settings.quicktabs[qtKey].tabs.length; i++) {
      if (i === this.tabIndex) {
        this.tabObj = Drupal.settings.quicktabs[qtKey].tabs[i];
        this.tabKey = i;
      }
    }
    this.tabpage_id = 'tabs-content__tab-page-' + el.qt_name + '-' + this.tabKey;
    this.container = $('#tabs__content-' + el.qt_name);
    this.tabpage = this.container.find('#' + this.tabpage_id);
  };

})(jQuery);
