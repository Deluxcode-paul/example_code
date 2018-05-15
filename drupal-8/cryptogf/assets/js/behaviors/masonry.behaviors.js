;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfMasonry = {
    attach: function (context, settings) {
      if ($.fn.masonry) {
        $('.grid', context).masonry({
          itemSelector: '.masonry_card',
          gutter: 30,
        });
      }
    }
  };
}(jQuery, Drupal, this, this.document));
