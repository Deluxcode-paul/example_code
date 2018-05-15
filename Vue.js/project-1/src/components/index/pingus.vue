<template>
  <section class="ping_us">
    <slot></slot>
    <div class="container">
      <h4 data-aos-once="true" data-aos="zoom-out-up">We provide full-cycle web development</h4>
      <p data-aos-once="true" data-aos="zoom-out-down">delivering pixel-perfect digital developments</p>

      <button slot="button" @click="open" class="btn blue_gradient open_modal" data-aos-once="true" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">ping us</button>
    </div>

  </section>
</template>

<script>

export default {
  name: 'PingUsComponent',
  methods: {
    open () {
      this.$parent.$emit('showModal')
    }
  }
}
</script>
