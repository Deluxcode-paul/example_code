;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfBackgroundCheck = {
    attach: function (context, settings) {
      setTimeout(function() {
        BackgroundCheck.init({
          targets: ".text , .date , .grad" ,
          threshold: 50,
          images: '.news_card_holder img',
          windowEvents:false
        });
      }, 1000);
    }
  };
}(jQuery, Drupal, this, this.document));
