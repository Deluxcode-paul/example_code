<template>
  <div class="float header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="logo">
          <span>deluxcode</span>
        </router-link>
      </div>
      <div class="nav_block">
        <div class="sandwich" @click="open()" :class="{ 'active': show }">
          <div class="piece top"></div>
          <div class="piece middle"></div>
          <div class="piece bottom"></div>
        </div>
        <nav class="animate" :class="{ 'active': show }">
          <router-link to="/">Home</router-link>
          <router-link to="/#services" v-smooth-scroll="{ duration: 1000 }">Service</router-link>
          <router-link to="/#portfolio" v-smooth-scroll="{ duration: 1000 }">Portfolio</router-link>
          <!-- <router-link to="/#home" v-smooth-scroll>Work Flow</router-link> -->
          <!-- <router-link to="/#home" v-smooth-scroll>Team</router-link> -->
          <router-link to="careers" v-smooth-scroll>Careers</router-link>
          <router-link to="/#contact" v-smooth-scroll>Contact</router-link>
          <i @click="modal" class="header_email_icon lnr lnr-envelope"></i>
        </nav>
      </div>
    </div>
    <div class="progress-bar" :style="{ width: width + '%' }"></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'HeaderComponent',
  data () {
    return {
      width: 0,
      show: false
    }
  },
  methods: {
    open () {
      this.show = !this.show
    },
    modal () {
      this.$parent.$emit('showModal')
    }
  },
  mounted () {
    let self = this
    $(document).scroll(function () {
      var wintop = $(window).scrollTop()
      var docheight = $(document).height()
      var winheight = $(window).height()
      var pageHeight = (docheight - winheight)

      self.width = Math.round(((wintop / pageHeight) * 100) * 100) / 100

      // console.log(self.width)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/sass/style';
  @import '~@/assets/sass/_header';

  .progress-bar {
    height: 3px;
    background: #33ccff;
/*    background: -moz-linear-gradient(left, #33ccff 0%, #000033 100%);
    background: -webkit-linear-gradient(left, #33ccff 0%,#000033 100%);
    background: linear-gradient(to right, #33ccff 0%,#000033 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#33ccff', endColorstr='#000033',GradientType=1 );
*/    width: 100%;
  }
</style>
