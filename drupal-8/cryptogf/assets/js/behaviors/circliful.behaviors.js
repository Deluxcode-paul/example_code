;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfCircliful = {
    attach: function (context, settings) {
      if ($.fn.circliful && $('.stat', context).length) {
        $('.stat', context).circliful({
          animation: 0,
          dimension:72,
          textStyle: 'font-size: 18px; color:#242635;',
          backgroundColor: "#ecf0f6",
          fillColor: 'none',
          foregroundColor:'#4c46ff'
        });
      }
    }
  }
}(jQuery, Drupal, this, this.document));
