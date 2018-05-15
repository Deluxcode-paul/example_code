<template>

  <div class="notfound">
    <div class="sky">
      <div class="earth">
        <div class="planet"></div>
        <div class="orbit"></div>
        <div class="satellite"></div>
      </div>
      <div class="text">
        <p>Whoa! How did you get out here?</p>
        <button class="btn">Go back to Earth</button>
      </div>

      <div class="cosmonaut">
        <div class="boy"></div>
      </div>

      <div class="stars"></div>
      <div class="stars1"></div>
      <div class="stars2"></div>
      <div class="shooting-stars"></div>
    </div>
  </div>

  <!-- <div class="page_404">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    <div class="title_404">
      <p>404</p>
      <p class="text">Whoa! How did you get out here?</p>

      <router-link class="btn btn_404" to="/"> Go back to Earth <i class="lnr lnr-rocket"></i></router-link>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style lang="scss" scoped>
  $starFieldWidth: 2560;
  $starFieldHeight: 2560;
  $starStartOffset: 600px;

  $starOneScrollDuration: 100s;
  $starTwoScrollDuration: 125s;
  $starThreeScrollDuration: 175s;
  $numStarOneStars: 1700;
  $numStarTwoStars: 700;
  $numStarThreeStars: 200;
  $numShootingStars: 10;
  $width: 100%;

  .notfound {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #020107 0%, #201b46 100%);

    .text {
      z-index: 15;
      position: absolute;
      top: 50%;
      right: 50%;
      -webkit-transform: translate(50%, 50%);
      transform: translate(50%, 50%);
      text-align: center;
      p {
        font-size: 20px;
        font-weight: bold;
        color: #FFF;
      }

      button {
        margin-top: 20px;
      }
    }

    .earth {
      height: 440px;
      position: relative;
      top: -285px;

      .planet {
        z-index: 2;
        width: 960px;
        height: 960px;
        background-size: 100%;
        position: absolute;
        top: -410px;
        left: 50%;
        margin-left: -480px;
        background-image: url('~@/assets/img/404/planet-earth.svg');
        -webkit-animation: spin 300s infinite linear;
        animation: spin 300s infinite linear;
      }

      .orbit {
        z-index: 2;
        width: 1060px;
        height: 1060px;
        background-size: 100%;
        position: absolute;
        top: -460px;
        left: 50%;
        margin-left: -530px;
        background-image: url('~@/assets/img/404/orbit.svg');
      }

      .satellite {
        z-index: 2;
        width: 1136px;
        height: 1136px;
        background-size: 80px;
        background-repeat: no-repeat;
        background-position: bottom;
        position: absolute;
        top: -498px;
        left: 50%;
        margin-left: -568px;
        background-image: url('~@/assets/img/404/satellite.svg');
        -webkit-animation: refspin 150s infinite linear;
        animation: refspin 150s infinite linear;
      }
    }

    .cosmonaut{
      .boy {
        z-index: 15;
        position: absolute;
        bottom: 0;
        left: 30%;
        width: 108px;
        height: 254px;
        background-image: url('~@/assets/img/404/cosmonaut.png');
      }
    }
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
  @-webkit-keyframes refspin {
    0% {
      -webkit-transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }
  @keyframes refspin {
    0% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @function create-stars($n) {
    $stars: "#{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";

    @for $i from 2 through $n {
      $stars: "#{$stars} , #{random($starFieldWidth)}px #{random($starFieldHeight)}px #FFF";
    }

    @return unquote($stars);
  }

  @mixin star-template($numStars, $starSize, $scrollSpeed) {
    z-index: 5;
    width: $starSize;
    height: $starSize;
    border-radius: 50%;
    background: transparent;
    box-shadow: create-stars($numStars);
    animation: animStar $scrollSpeed linear infinite;

    &:after {
      content: " ";
      top: -$starStartOffset;
      width: $starSize;
      height: $starSize;
      border-radius: 50%;
      position: absolute;
      backgroud: transparent;
      box-shadow: create-stars($numStars);
    }
  }

  @mixin shooting-star-template($numStars, $starSize, $speed) {
    z-index: 10;
    width: $starSize;
    height: $starSize + 80px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    animation: animShootingStar $speed linear infinite;
  }

  .stars {
    @include star-template($numStarOneStars, 1px, $starOneScrollDuration);
  }

  .stars1 {
    @include star-template($numStarTwoStars, 2px, $starTwoScrollDuration);
  }

  .stars2 {
    @include star-template($numStarThreeStars, 3px, $starThreeScrollDuration);
  }

  .shooting-stars {
    @include shooting-star-template($numShootingStars, 5px, 10s);
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px);
    }
  }

  @keyframes animShootingStar {
    from {
      transform: translateY(0px) translateX(0px) rotate(-45deg);
      opacity: 1;
      height: 5px;
    }

    to {
      transform: translateY(-#{$starFieldHeight}px) translateX(-#{$starFieldWidth}px) rotate(-45deg);
      opacity: 1;
      height: 800px;
    }
  }
</style>
