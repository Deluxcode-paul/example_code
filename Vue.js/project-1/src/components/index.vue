<template>
  <div class="main">
    <transition name="fade">
      <header-component v-if="offset"></header-component>
    </transition>

    <header data-aos="fade-down">
      <div class="container">
        <div class="nav_block">
          <div class="sandwich" @click="open()" :class="{ 'active': show }">
            <div class="piece top"></div>
            <div class="piece middle"></div>
            <div class="piece bottom"></div>
          </div>
          <nav class="animate" :class="{ 'active': show }">
            <a href="#home" v-smooth-scroll>Home</a>
            <a href="#services" v-smooth-scroll="{ duration: 1000, offset: -50 }">Service</a>
            <a href="#portfolio" v-smooth-scroll="{ duration: 1000, offset: -100 }">Portfolio</a>
            <!-- <a href="#" v-smooth-scroll>Work Flow</a>
            <a href="#" v-smooth-scroll>Team</a> -->
            <router-link to="careers">Careers</router-link>
            <a href="#contact" v-smooth-scroll>Contact</a>
          </nav>
        </div>
      </div>
    </header>

    <div @click="close">
      <home></home>

      <services></services>

      <portfolio></portfolio>

      <ping-us></ping-us>

      <footer-component></footer-component>

      <modal :show="showModal" @close="showModal = false"></modal>
    </div>

  </div>

</template>

<script>
import HeaderComponent from '@/components/index/header'
import HomeComponent from '@/components/index/home'
import ServicesComponent from '@/components/index/service'
import PortfolioComponent from '@/components/index/portfolio'
import PingUsComponent from '@/components/index/pingus'
import FooterComponent from '@/components/index/footer'
import ModalComponent from '@/components/index/modal'

export default {
  name: 'index',
  data () {
    return {
      offset: false,
      show: false,
      showModal: false
    }
  },
  components: {
    'header-component': HeaderComponent,
    'home': HomeComponent,
    'services': ServicesComponent,
    'portfolio': PortfolioComponent,
    'ping-us': PingUsComponent,
    'footer-component': FooterComponent,
    'modal': ModalComponent
  },
  methods: {
    handleScroll: function () {
      if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        this.offset = (document.documentElement.scrollTop || window.pageYOffset) > 220
        // if (this.show && this.offset) {
        //   this.show = false
        // }
      } else {
        this.offset = (document.documentElement.scrollTop || window.pageYOffset) > 20
      }
    },
    open: function () {
      this.show = !this.show
    },
    close () {
      this.show = false
      // this.showModal = false
    },
    openModal () {
      this.showModal = !this.showModal
      console.log(this.showModal)
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
    document.title = 'Deluxcode'
    // this.$root.$emit('show', show);
  },
  mounted () {
    this.$on('showModal', () => {
      this.showModal = !this.showModal
    })
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/sass/_animate';
</style>
