;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfDownCount = {
    attach: function (context, settings) {
      $('.js-countdown', context).each(function () {
        var countDate = $(this).data('date');
        if (countDate != undefined) {
          $(this).downCount({
            date: countDate
            // offset: +2,
          });
        }
      });
    }
  };
}(jQuery, Drupal, this, this.document));
