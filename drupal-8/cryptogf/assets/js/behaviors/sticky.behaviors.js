;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfSticky = {
    attach: function (context, settings) {
      if (hcSticky != undefined) {
        var Sticky = new hcSticky('.js-sticky', {
          stickTo: '.content_block > .limit',
          followScroll: false,
          top: 20,
          bottom: 20
        });
      }
    }
  }
}(jQuery, Drupal, this, this.document));
