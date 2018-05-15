;(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfMorris= {
    attach: function (context, settings) {
      $('.js-morris', context).once('cgf-morris').each(function () {
        var day_data = [
          {"period": "2012-10-01", "licensed": 10},
          {"period": "2012-09-30", "licensed": 22},
          {"period": "2012-09-29", "licensed": 20},
          {"period": "2012-09-20", "licensed": 30},
          {"period": "2012-09-19", "licensed": 25},
          {"period": "2012-09-18", "licensed": 26},
        ];
        Morris.Line({
          element: 'graph',
          data: day_data,
          xkey: 'period',
          ykeys: ['licensed'],
          labels: ['Licensed']
        });
      });
    }
  }
}(jQuery, Drupal, this, this.document));
