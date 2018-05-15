;(function($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.cryptogfViewsStyle = {
    attach: function(context, settings) {
      $("[data-attr-style]", context).each(function(idx) {
        var style = $(this).data('attr-style');
        if (style != undefined) {
          $(this).attr('style', style);
        }
      });
    }
  };
  Drupal.behaviors.cryptogfICOTabs = {
    attach: function(context, settings) {
      $('.js-tab-ico-action', context).on('click', function(e) {
        // e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var $this = $(this),
          thisTab = $this.data('tab');
        if (thisTab = !undefined) {
          var dataTab = $this.data('tab');
          $this.closest('.views-element-container').attr('data-active-tab', dataTab);
          $this.parent().find('.js-tab-ico-action').removeClass('active');
          $this.parent().find('.js-tab-ico-action[data-tab="' + dataTab + '"]').addClass('active');
          $('.tab-ico.active', context).removeClass('active');
          $('.tab-ico.' + dataTab, context).addClass('active');
        }
      });
      var activeTab = $('.views-element-container').attr('data-active-tab');
      if (activeTab != undefined) {
        $('.views-element-container[data-active-tab="' + activeTab + '"] .js-tab-ico-action.active').removeClass('active');
        $('.views-element-container[data-active-tab="' + activeTab + '"] .js-tab-ico-action[data-tab="' + activeTab + '"]').addClass('active');
        $('.views-element-container[data-active-tab="' + activeTab + '"] .tab-ico.active').removeClass('active');
        $('.views-element-container[data-active-tab="' + activeTab + '"] .tab-ico.' + activeTab).addClass('active');
      }
    }
  };
  Drupal.behaviors.cryptogQuickTabs = {
    attach: function(context, settings) {
      $('.quicktabs-wrapper', context).each(function() {
        var id = $(this).attr('id');
        if (id != undefined) {
          var tabsId = id.replace('quicktabs-','');
          var hash = location.hash.substr(1);
          switch (hash) {
            case 'coins':
              $('.quicktabs-tabs a[href*="' + tabsId + '/1"]').click();
              break;
          }
          console.log('.quicktabs-tabs a[href*="' + tabsId + '/1"]');
        }
        // var tab = $.cookie(id);
        //
        // if (tab != '') {
        //   $(this).find('ul.quicktabs-tabs a#' + tab).click();
        // }
        // $(this).find('ul.quicktabs-tabs a').click(function() {
        //   $.removeCookie(id, {path: '/'});
        //   $.cookie(id, $(this).attr('id'), {path: '/'});
        // });
      });
    }
  };
  Drupal.behaviors.cryptogfFormSelect = {
    attach: function(context, settings) {
      if ($.fn.selectmenu) {
        $('.form-select', context).once('cgf-form-select').each(function() {
          $(this).selectmenu({
            change: function(event, ui) {
              var selectors = 'form[data-bef-auto-submit-full-form], [data-bef-auto-submit-full-form] form, [data-bef-auto-submit], form.language_interface';
              if ($(this).closest(selectors).find('[data-bef-auto-submit-click]').length) {
                $(this).closest(selectors).find('[data-bef-auto-submit-click]').trigger('click');
              } else {
                $(this).closest(selectors).trigger('submit');
              }
            }
          });
        });
      }
    }
  };
  Drupal.behaviors.cryptogfExternalLinks = {
    attach: function(context, settings) {
      $('[rel="external"]', context).attr('target', '_blank');
    }
  };
  Drupal.behaviors.cryptogfMainSlider = {
    attach: function(context, settings) {
      if ($.fn.slick) {
        window.mainSliderPause = $('.main_slider', context).data("pause");
        $('.main_slider', context).slick({
          arrows: true,
          autoplay: true,
          autoplaySpeed: mainSliderPause
        });
        $('.main_slider', context).slick('slickPause');
        $(".slide_nav", context).eq($('.main_slider', context).slick('slickCurrentSlide')).addClass("active");
        $(".sub_list", context).eq($('.main_slider', context).slick('slickCurrentSlide')).css("display", "block");
        $('.main_slider', context).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
          $(".slide_nav", context).removeClass("active");
          $(".slide_nav", context).eq(nextSlide).addClass("active");
          $(".sub_list", context).css("display", "none");
          $(".sub_list", context).eq(nextSlide).css("display", "block");
          $(".slide_progress_bar", context).stop();
          $(".slide_progress_bar", context).css("width", 0);
        });
        $('.main_slider', context).on('afterChange', function() {
          $(".slide_progress_bar", context).animate({
            width: 100 + "%"
          }, mainSliderPause);
        });
        $(".slide_nav", context).on('click', function(e) {
          e.preventDefault();
          $(".slide_nav", context).removeClass("active");
          $(this).addClass("active");
          var slideIndex = $(this).index();
          $(".sub_list", context).css("display", "none");
          $(".sub_list", context).eq(slideIndex).css("display", "block");
          $('.main_slider', context).slick('slickGoTo', parseInt(slideIndex));
        });
        $(".slide_progress_bar", context).animate({
          width: 100 + "%"
        }, mainSliderPause);
        $('.mainslider_block', context).hover(function() {
          $('.main_slider', context).slick('slickPause');
          $(".slide_progress_bar", context).stop();
        }, function() {
          $('.main_slider', context).slick('slickPlay');
          $(".slide_progress_bar", context).animate({
            width: 100 + "%"
          }, mainSliderPause);
        });
      }
    }
  };
  Drupal.behaviors.cryptogfSlick = {
    attach: function(context, settings) {
      if ($.fn.slick) {
        $('.table_slider', context).slick({
          arrows: true,
          autoplay: true,
          autoplaySpeed: 5000
        });
      }
    }
  };
  Drupal.behaviors.cryptogfRegister = {
    attach: function(context, settings) {
      $('.user-register-form', context).once('register-form').each(function() {
        $('.user-register-form input[type=password]', context).each(function() {
          $(this).after('<a href="#" rel="nofollow" class="s-h-pass"><i class="fas fa-eye"></i></a>');
        });
        $('.s-h-pass', context).on('click', function() {
          var _input = $(this).parent().find('input');
          if (_input.attr('type') == 'password') {
            _input.attr('type', 'text');
          } else {
            _input.attr('type', 'password');
          }
        })
      });
      $("#edit-set-url").on('input', function() {
        $("#url_out").find("span").text($(this).val());
      });
      jQuery("body").find('.form-autocomplete').on('autocompleteclose', function(event, node) {
        var val = jQuery(this).val();
        var match = val.match(/\((.*?)\)$/);
        if (match) {
          jQuery(this).data('real-value', val);
          jQuery(this).val(val.replace(' ' + match[0], ''));
        }
      })
    }
  };
  Drupal.behaviors.cryptogfMultiple = {
    attach: function(context, settings) {
      $('.js-multiple-header', context).on("touchstart click", function(e) {
        var $this = $(this);
        $this.next('.js-multiple-content').slideToggle(function() {
          $this.closest('.js-multiple-item').toggleClass("open");
        });
      });
    }
  };
  Drupal.behaviors.cryptogfBEF = {
    attach: function(context, settings) {
      $('input[name*="now_start"]', context).on('change', function(e) {
        var checkStatus = $(this).prop('checked');
        $(this).closest('form').find('input[name*="now_end"]').prop("checked", checkStatus);
      })
    }
  };
  Drupal.behaviors.cryptogfNews = {
    attach: function(context, settings) {
      $('.js-news_tab_navigation', context).once('cgf-news-tab-navigation').each(function() {
        var $this = $(this);
        $this.find('li').each(function(i) {
          if ($this.find('li').eq(i).hasClass("active")) {
            $this.closest('.news_tab').find('.news_tab_content').removeClass("active");
            $this.closest('.news_tab').find('.news_tab_content').eq(i).addClass("active");
          }
          $(this).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active').closest('.news_tab').find('.news_tab_content').removeClass("active").eq(i).addClass("active");
            $(".news_text", context).removeClass("open");
          });
        });
      });
      if ($(".search_block", context).hasClass("show")) {
        $(".search_block", context).show();
      }
      $(".news", context).on('click', ".filter_button", function(e) {
        $(".search_block", context).slideToggle(200, function() {
          $('.region-content').toggleClass('open_search_block');
          $(this).stop(true);
        });
      });
      $(".search .set", context).on('click', function() {
        $(".filter_block", context).slideToggle(200, function() {
          $('.region-content').toggleClass('open_filter_block');
          $(this).stop(true);
        });
      });
      $(".popup_block", context).parent("div").hover(function() {
        $(this).find(".popup_block").fadeIn(200);
      }, function() {
        $(this).find(".popup_block").fadeOut(200, function() {
          $(this).stop(true);
        });
      });
      $(".button.spam .submit_button", context).on('click', function() {
        $(".popup_block", context).fadeOut(200, function() {
          $(this).stop(true);
        });
      });
    }
  };
  Drupal.behaviors.cryptogfTrLinks = {
    attach: function(context, settings) {
      $('#quicktabs-container-home_tabs', context).once('tr-links').each(function() {
        $('#quicktabs-tabpage-home_tabs-1 .table table tbody > tr').each(function() {
          $(this).click(function() {
            window.location = $(this).find('.views-field-title a').attr('href');
          })
        });
        $('#quicktabs-tabpage-home_tabs-2 .table table tbody > tr').each(function() {
          $(this).click(function() {
            window.location = $(this).find('.views-field-name a').attr('href');
          })
        });
      });
    }
  };
  Drupal.behaviors.cryptogfSet = {
    attach: function(context, settings) {
      $(".set", context).on('click', function() {
        $(".filter_block", context).slideToggle("fast", function() {
          $(this).stop(true);
        });
      });
      $(".popup_block", context).parent("div").hover(function() {
        $(this).find(".popup_block").fadeIn("slow");
      }, function() {
        $(this).find(".popup_block").fadeOut("slow", function() {
          $(this).stop(true);
        });
      });
      $(".button.spam", context).find(".submit_button").click(function() {
        $(".popup_block", context).fadeOut("slow", function() {
          $(this).stop(true);
        });
      });
    }
  };
  Drupal.behaviors.cryptogfComment = {
    attach: function(context, settings) {
      var currentUserID = parseInt(drupalSettings.user.uid, 10);
      $('[data-comment-user-id]', context).filter(function() {
        return parseInt(this.getAttribute('data-comment-user-id'), 10) === currentUserID;
      }).addClass('my');
    }
  };
  Drupal.behaviors.cryptogfbPopup = {
    attach: function(context, settings) {
      if ($.fn.bPopup) {
        $('.modal_button', context).once('cgf-bPopup').each(function() {
          $(this).on('click', function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var modal = $(this).attr("href");
            $(modal).bPopup({
              closeClass: 'close',
              modalClose: true
            });
          });
        });
      }
      $(".interes_bar .progress", context).css("width", $(".interes_bar .index", context).text() * 100 / $(".interes_bar .end", context).text() + '%');
    }
  };
  Drupal.behaviors.cryptogfScrollbar = {
    attach: function(context, settings) {
      if ($.fn.scrollbar) {
        $('.scrollbar-external', context).scrollbar({
          //"autoScrollSize": false,
          "scrolly": $('.external-scroll_y', context)
        });
        $('.hr_skroll', context).scrollbar({
          autoScrollSize :false
        });
      }
    }
  };
}(jQuery, Drupal, this, this.document));
