<template>
  <footer id="contact">
    <div class="container">
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo">
        <span>deluxcode</span>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/#services" v-smooth-scroll="{ duration: 1000 }">Service</router-link>
        <router-link to="/#portfolio" v-smooth-scroll="{ duration: 1000 }">Portfolio</router-link>
        <!-- <a href="#">Careers</a> -->
        <router-link to="/#contact" v-smooth-scroll>Contact</router-link>
      </nav>
      <a class="go_up" href="#home" v-smooth-scroll>
        <img class="btn_up" src="@/assets/img/up.png" alt="up">
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
