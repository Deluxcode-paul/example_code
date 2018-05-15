<template>
  <section id="home" class="home">
    <div class="text_wrap">
      <img src="@/assets/img/logo.png" alt="logo" style="width: 100px">
      <h1>Deluxcode</h1>
      <p>Full Stack Web Agency with <br/>High Experimented Developers and Designers</p>
      <button class="btn" @click="open">Get Started Now</button>

      <div class="mouse_wrap">
        <div class="mouse"></div>
      </div>
    </div>
    <div class="solar_tech_sysem">
        <div class="circle1">
          <img class="icon git_icon" src="@/assets/img/planetary/Laravel.png" alt="laravel">
          <img class="icon ball_blue" src="@/assets/img/planetary/Docker.png" alt="ball">
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
          <img class="icon ball_orange" src="@/assets/img/planetary/Deluxcode_logo.png" alt="ball">

        </div>
      </div>

  </section>
</template>

<script>

export default {
  name: 'HomeComponent',
  methods: {
    open () {
      this.$parent.$emit('showModal')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/sass/_variables';

  .solar_tech_sysem {
    position: relative;

    @mixin rotate($duration) {
      -webkit-animation: spin $duration infinite linear;
      animation: spin $duration infinite linear;
    }
    @mixin reverse($duration) {
      -webkit-animation: spin-2 $duration infinite linear;
      animation: spin-2 $duration infinite linear;
    }
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin-2 {
      0% {
        -webkit-transform: rotate(-0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
      }
    }
    @keyframes spin-2 {
      0% {
        -webkit-transform: rotate(-0deg);
        transform: rotate(-0deg);
      }
      100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
      }
    }

    .circle1,
    .circle2,
    .circle3,
    .circle4 {
      position: absolute;
      border: 1px solid transparentize($lightblue, 0.9);
      -webkit-border-radius: 50%;
      border-radius: 50%;
      .icon {
        position: absolute;
      }
    }
    .circle1 {
      height: 700px;
      width: 700px;
      top: 100px;
      left: -webkit-calc(50% - 350px);
      left: calc(50% - 350px);
      @include rotate(300s);
      .git_icon {
        top: -30px;
        left: -webkit-calc(50% - 30px);
        left: calc(50% - 30px);
        @include reverse(20s);
      }
      .ball_blue {
        left: 25px;
        bottom: 155px;
      }
      .ball_cyan {
        right: 15px;
        bottom: 155px;
      }
      .bootstrap_icon {
        left: 0;
        top: -135px;
        @include reverse(20s);
      }
    }
    .circle2 {
      height: 1000px;
      width: 1000px;
      left: -webkit-calc(50% - 500px);
      left: calc(50% - 500px);
      top: -50px;
      @include reverse(360s);
      .react_icon {
        bottom: 70px;
        left: 170px;
        @include rotate(20s);
      }
      .ball_blue {
        top: 0;
        right: 285px;
      }
      .ball_cyan {
        right: 25px;
        bottom: 235px;
      }
      .ball_red {
        left: 25px;
        top: 235px;
      }
      .axure_icon {
        right: 100px;
        bottom: 50px;
        @include rotate(20s);
      }
    }
    .circle3 {
      height: 1300px;
      width: 1300px;
      top: -200px;
      left: -webkit-calc(50% - 650px);
      left: calc(50% - 650px);
      @include rotate(420s);
      .php_icon {
        width: 80px;
        bottom: 155px;
        right: 145px;
        @include reverse(20s);
      }
      .mysql_icon {
        width: 70px;
        left: 95px;
        top: 210px;
        @include reverse(20s);
      }
      .ball_cyan {
        left: 40px;
        bottom: 315px;
      }
      .ball_orange {
        right: 45px;
        top: 310px;
      }
      .angular_icon {
        top: 335px;
        right: 300px;
        @include reverse(20s);
      }
      .leaf_ion {
        bottom: 500px;
        left: -230px;
      }
    }
    .circle4 {
      height: 1600px;
      width: 1600px;
      top: -350px;
      left: -webkit-calc(50% - 800px);
      left: calc(50% - 800px);
      @include reverse(480s);
      .laravel_icon {
        top: 120px;
        right: 300px;
        @include rotate(20s);
      }
      .wp_icon {
        left: 150px;
        bottom: 245px;
        @include rotate(20s);
      }
      .ball_red {
        left: 105px;
        top: 315px;
      }
      .ball_orange {
        right: 300px;
        bottom: 120px;
      }
      .bitbucket_ion {
        top: 290px;
        right: 475px;
        @include rotate(20s);
      }
    }
  }
</style>
