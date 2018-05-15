;(function ($, Drupal, window, document) {
  'use strict';
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  Drupal.behaviors.cryptogfChart = {
    attach: function (context, settings) {
      var $holder = $('.js-diagram-holder', context),
          $diagram = $holder.find('.js-diagram'),
          $items = $holder.find('.js-diagram-item');
      if ($diagram.length) {
        var labels = [];
        var qty = [];
        $items.each(function() {
          var title = $(this).find('[data-title]').data('title');
          var quantity = $(this).find('[data-quantity]').data('quantity');
          if (title != undefined) {
            labels.push(title);
          }
          if (title != undefined) {
            qty.push(quantity);
          }
        });
        var ctx = $diagram.get(0).getContext('2d');
        var coinDistributionChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              label: '# of Votes',
              data: qty,
              backgroundColor: [
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
              ],
              borderWidth: 0
            }]
          },
          options: {
            legend: {
              position: 'bottom',
              fontSize:'14',
            },
            scales: {
              yAxes: [{
                display: false,
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });
      }
    }
  }
}(jQuery, Drupal, this, this.document));
