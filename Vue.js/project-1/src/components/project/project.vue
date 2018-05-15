<template>
  <div>
    <transition name="fade">
      <header-component v-if="offset"></header-component>
    </transition>

    <span v-if="item" v-html="item.html"></span>
    <!-- Change to 404 page -->
    <span v-else>404</span>
  </div>
</template>

<script>
import $ from 'jquery'
import HeaderComponent from '@/components/index/header'

import axios from 'axios'

export default {
  name: 'ProjectComponent',
  data () {
    return {
      name: this.$route.params.name,
      item: {},
      offset: false
    }
  },
  components: {
    'header-component': HeaderComponent
  },
  methods: {
    handleScroll: function () {
      this.offset = (document.documentElement.scrollTop || window.pageYOffset) > 20
    }
  },
  created: async function () {
    window.addEventListener('scroll', this.handleScroll)

    // async method
    try {
      const response = await axios.get('https://deluxcode-a7cbf.firebaseio.com/projects/' + this.name + '.json')

      if (!response.data) {
        this.$router.push({path: '404'})
        console.log('404')
        return
      }

      this.item = response.data

      document.title = 'Deluxcode - ' + this.item.title ? this.item.title : '404'

      $(document).ready(function () {
        $('.iphone_carousel').waterwheelCarousel({
          opacityMultiplier: 1,
          autoPlay: 2000,
          separation: 300,
          flankingItems: 2,
          separationMultiplier: 0.8,
          horizonOffsetMultiplier: 1,
          sizeMultiplier: 0.9
        })

        $(document).scroll(function () {
          var viewportheight = $(window).height()
          var bodyscrollTop = $(this).scrollTop()
          var container, containerTop

          if ($('.travel').length) {
            container = $('.scroll_slide').outerHeight()
            containerTop = $('.scroll_slide').offset().top

            if (bodyscrollTop >= containerTop && bodyscrollTop < containerTop - viewportheight + container) {
              $('.airplane').addClass('active')
            } else if (bodyscrollTop >= containerTop - viewportheight + container) {
              $('.airplane').addClass('away')
            }
          }

          if ($('.twlp').length) {
            container = $('.footer_deluxe_title').outerHeight()
            containerTop = $('.footer_deluxe_title').offset().top

            if (bodyscrollTop > (containerTop - (container + (container / 2)))) {
              $('.letter_mask').addClass('active')
              setTimeout(function () {
                $('.footer_orange').addClass('active')
              }, 1700)
            }
          }
        })

        if ($('.igf').length) {
          var HeartsBackground = {
            heartHeight: 60,
            heartWidth: 64,
            hearts: [],
            heartImage: ['/static/igf/heart.png', '/static/igf/star.png', '/static/igf/play.png', '/static/igf/like.png', '/static/igf/heart.png', '/static/igf/star.png', '/static/igf/play.png', '/static/igf/like.png', '/static/igf/heart.png', '/static/igf/star.png', '/static/igf/play.png', '/static/igf/like.png', '/static/igf/heart.png', '/static/igf/star.png', '/static/igf/play.png', '/static/igf/like.png'],
            maxHearts: 16,
            minScale: 0.4,
            draw: function () {
              this.setCanvasSize()
              this.ctx.clearRect(0, 0, this.w, this.h)
              for (var i = 0; i < this.hearts.length; i++) {
                var heart = this.hearts[i]
                heart.image = new Image()
                heart.image.style.height = heart.height
                heart.image.src = this.heartImage[i]
                this.ctx.globalAlpha = heart.opacity
                this.ctx.drawImage(heart.image, heart.x, heart.y, heart.width, heart.height)
              }
              this.move()
            },
            move: function () {
              for (var b = 0; b < this.hearts.length; b++) {
                var heart = this.hearts[b]
                heart.y += heart.ys
                if (heart.y > this.h) {
                  heart.x = Math.random() * this.w
                  heart.y = -1 * this.heartHeight
                }
              }
            },
            setCanvasSize: function () {
              this.canvas.width = window.innerWidth
              this.canvas.height = window.innerHeight + 150
              this.w = this.canvas.width
              this.h = this.canvas.height
            },
            initialize: function () {
              this.canvas = $('#canvas')[0]

              if (!this.canvas.getContext) {
                return
              }

              this.setCanvasSize()
              this.ctx = this.canvas.getContext('2d')

              for (var a = 0; a < this.maxHearts; a++) {
                var scale = (Math.random() * (1 - this.minScale)) + this.minScale
                this.hearts.push({
                  x: Math.random() * this.w,
                  y: Math.random() * this.h,
                  ys: Math.random() + 1,
                  height: scale * this.heartHeight,
                  width: scale * this.heartWidth,
                  opacity: scale
                })
              }

              setInterval($.proxy(this.draw, this), 30)
            }
          }
          HeartsBackground.initialize()
        }
      })
    } catch (e) {
      console.log(e)
    }
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/sass/_animate';
</style>
