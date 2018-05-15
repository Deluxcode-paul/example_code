<template>
  <div class="main countdown">
    <section class="home">
      <div class="text_wrap">
        <!-- <img src="@/assets/img/logo.png" alt="logo" style="width: 100px"> -->
        <h1>Deluxcode</h1>
        <p>Full Stack Web Agency with
          <br/>High Experimented Developers and Designers.
        </p>
        <div class="timer"><div>
          Get Started Now
        </div></div>
        <button @click="showModal = true" class="btn">Get Started Now</button>
      </div>
      <div class="solar_tech_sysem">
        <div class="circle1">
          <img class="icon git_icon" src="@/assets/img/planetary/Laravel.png" alt="laravel">
          <img class="icon ball_blue" src="@/assets/img/planetary/Deluxcode_logo.png" alt="ball">
          <img class="icon ball_cyan" src="@/assets/img/planetary/nodejs.png" alt="ball">
        </div>
        <div class="circle2">
          <img class="icon react_icon" src="@/assets/img/planetary/React-icon.png" alt="react">
          <img class="icon ball_blue" src="@/assets/img/ball_cyan.png" alt="ball">
          <img class="icon ball_cyan" src="@/assets/img/planetary/Angular.png" alt="angular">
          <img class="icon ball_red" src="@/assets/img/planetary/DigitalOcean.png" alt="ball">
        </div>
        <div class="circle3">
          <img class="icon php_icon" src="@/assets/img/planetary/PHP.png" alt="php">
          <img class="icon mysql_icon" src="@/assets/img/mysql.png" alt="mysql">
          <img class="icon ball_cyan" src="@/assets/img/planetary/Wordpress-C.png" alt="ball">
          <img class="icon ball_orange" src="@/assets/img/ball_orange.png" alt="ball">
        </div>
        <div class="circle4">
          <img class="icon laravel_icon" src="@/assets/img/planetary/github.png" alt="git">
          <img class="icon ball_red" src="@/assets/img/planetary/Drupal.png" alt="ball">
          <img class="icon ball_orange" src="@/assets/img/planetary/Docker.png" alt="ball">
        </div>
      </div>
    </section>

    <modal :show="showModal" @close="showModal = false"></modal>
  </div>
</template>

<script>
import $ from 'jquery'

import ModalComponent from '@/components/index/modal'

export default {
  name: 'Counter',
  data () {
    return {
      showModal: false
    }
  },
  components: {
    'modal': ModalComponent
  },
  created: async function () {
    document.title = 'Deluxcode Web Development Company'

    try {
      $(document).ready(function () {
        function updateTimer () {
          var future = Date.parse('Mar 21, 2018 11:30:00')
          var now = new Date()
          var diff = future - now

          var days = Math.floor(diff / (1000 * 60 * 60 * 24))
          var hours = Math.floor(diff / (1000 * 60 * 60))
          var mins = Math.floor(diff / (1000 * 60))
          var secs = Math.floor(diff / 1000)

          var d = days
          var h = hours - days * 24
          var m = mins - hours * 60
          var s = secs - mins * 60

          $('.timer').html(
            '<div>' + d + '<span>days</span></div>' +
            '<div>' + h + '<span>hours</span></div>' +
            '<div>' + m + '<span>minutes</span></div>' +
            '<div>' + s + '<span>seconds</span></div>')
        }
        updateTimer()
        setInterval(
          function () {
            updateTimer()
          }, 1000)
      })
    } catch (e) {
      console.log(e)
    }
  },
  meta: {title: 'Deluxcode Improving IT Galaxy'}
}
</script>

<style lang='scss' scoped>
/*--COUNTDOWN--*/
.countdown {
  .home {
    height: 100vh;
    &:after {
      content: none;
    }
    .text_wrap {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      h1 {
        margin-bottom: 0;
      }
      p {
        margin-bottom: 20px;
      }
    }
    .timer {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      text-shadow: 0 0 20px #48C8FF;
      margin-bottom: 35px;
      div {
        min-width: 90px;
        font-size: 40px;
        span {
          color: #B1CDF1;
          display: block;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
    .btn {
        display: inline-block;
        line-height: 55px;
    }
  }
}
@media (max-width: 1100px) {
  .countdown {
    .home {
      .text_wrap {
        left: 50%;
        top: 380px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        h1 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}

@media only screen and (min-width:960px){
  .countdown {
    .home {
      .text_wrap {
        left: 50%;
        top: 420px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        h1 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}
@media only screen and (min-width:1440px){
  .countdown {
    .home {
      .text_wrap {
        left: 50%;
        top: 440px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        h1 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}
@media only screen and (min-width:2000px){
  .countdown {
    .home {
      .text_wrap {
        left: 50%;
        top: 440px;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        h1 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
}

</style>
