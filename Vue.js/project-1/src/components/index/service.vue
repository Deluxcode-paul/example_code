<template>
  <section id="services" class="services">
    <div class="service_item_wrap">
      <div class="service_item">
        <img src="@/assets/img/macbook2.png" alt="macbook">
        <div class="rocket_wrap" @click="rocketLaunch">
          <img class="rocket" src="@/assets/img/rocket.png" alt="rocket">
          <img class="trail" src="@/assets/img/trail.png" alt="trail">
        </div>
        <div class="clouds_new_wrap">
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      </div>
      <div class="service_item">
        <div class="text_block text_center" data-aos-once="true" data-aos="fade-down-left">
          <h2>We Use Best Practices and Proven Approach</h2>
          <p>of developing startups, web applications, and modular software components with extensibility, testability, supportability and integration</p>
        </div>
      </div>
    </div>
    <div class="service_item_wrap second">
      <div class="service_item">
        <div class="text_block text_center" data-aos-once="true" data-aos="fade-up-right">
          <h2>Let’s Create Your Online Success Teamwise!</h2>
        </div>
      </div>
      <div class="service_item">
        <img src="@/assets/img/d_logo.png" alt="macbook" data-aos-once="true" data-aos="fade-up-left">
      </div>
    </div>
    <div class="container">
      <div class="services_desk">
        <div class="service_icon_block prototyping" data-name="prototyping" data-aos-once="true" data-aos="zoom-out" v-on:click="getSevice(1)">
          <h3 class="animate">Wireframes</h3>
          <img class="service_icon animate" src="@/assets/img/prototyping.png" alt="icon">
        </div>
        <div class="service_icon_block design" data-name="design" data-aos-once="true" data-aos="zoom-out" v-on:click="getSevice(2)">
          <h3 class="animate">User Interface Design</h3>
          <img class="service_icon animate" src="@/assets/img/design.png" alt="icon">
        </div>
        <div class="service_icon_block development" data-name="development" data-aos-once="true" data-aos="zoom-out" v-on:click="getSevice(3)">
          <h3 class="animate">Development</h3>
          <img class="service_icon animate" src="@/assets/img/development.png" alt="icon">
        </div>
        <div class="service_icon_block qa" data-name="qa" data-aos-once="true" data-aos="zoom-out" v-on:click="getSevice(4)">
          <h3 class="animate">QA & Bug Fixing</h3>
          <img class="service_icon animate" src="@/assets/img/qa.png" alt="icon">
        </div>
        <div class="service_icon_block release" data-name="release" data-aos-once="true" data-aos="zoom-out" v-on:click="getSevice(5)">
          <h3 class="animate">Production</h3>
          <img class="service_icon animate" src="@/assets/img/release.png" alt="icon">
        </div>
        <div class="service_descr_block">
          <img src="@/assets/img/skills_monitor.png" alt="monitor">
          <div class="service_text" :class="{ 'active': service == 0 }">
            <p class="mt100">Deluxcode is a WordPress company serving small and midsize businesses with fab design and total PHP web development services.</p>
          </div>
          <div id="prototyping" class="service_text" :class="{ 'active': service == 1 }">
            <h3>Wireframes</h3>
            <p>We create empty squares with black borders so you could see a simplified outline of your product</p>
          </div>
          <div id="design" class="service_text" :class="{ 'active':  service == 2 }">
            <h3>User Interface Design</h3>
            <p>Your website is Your Face, so we design jim-dandy Users Interfaces that always deliver expressive results</p>
          </div>
          <div id="development" class="service_text" :class="{ 'active':  service == 3 }">
            <h3>Development</h3>
            <p>Our cutting-edge web products coded only in good mood with wide passion</p>
          </div>
          <div id="qa" class="service_text" :class="{ 'active':  service == 4 }">
            <h3>QA & Bug Fixing</h3>
            <p>This step can be passed successfully when application runs quicker than expected.<br> Kill a bug, save a day</p>
          </div>
          <div id="release" class="service_text" :class="{ 'active':  service == 5 }">
            <h3>Production</h3>
            <p>The launch phase.<br> After all checked and re-checked on a website, it’s time to upload it to a Live server</p>
          </div>
        </div>
      </div>

      <div class="services_mob">
        <div class="tab prototyping_tab" data-aos-once="true" data-aos="fade-right">
          <input id="prototyping_tab" type="radio" name="tabs2">
          <label for="prototyping_tab">
            <img class="service_icon" src="@/assets/img/prototyping.png" alt="icon">
            <span>Wireframes</span>
          </label>
          <div class="tab-content">
            <p>We create empty squares with black borders so you could see a simplified outline of your product</p>
          </div>
        </div>
        <div class="tab design_tab" data-aos-once="true" data-aos="fade-left">
          <input id="design_tab" type="radio" name="tabs2">
          <label for="design_tab">
            <img class="service_icon" src="@/assets/img/design.png" alt="icon">
            <span>User Interface Design</span>
          </label>
          <div class="tab-content">
            <p>Your website is Your Face, so we design jim-dandy Users Interfaces that always deliver expressive results</p>
          </div>
        </div>
        <div class="tab development_tab" data-aos-once="true" data-aos="fade-right">
          <input id="development_tab" type="radio" name="tabs2">
          <label for="development_tab">
            <img class="service_icon" src="@/assets/img/development.png" alt="icon">
            <span>Development</span>
          </label>
          <div class="tab-content">
            <p>Our cutting-edge web products coded only in good mood with wide passion</p>
          </div>
        </div>
        <div class="tab qa_tab" data-aos-once="true" data-aos="fade-left">
          <input id="qa_tab" type="radio" name="tabs2">
          <label for="qa_tab">
            <img class="service_icon" src="@/assets/img/qa.png" alt="icon">
            <span>QA & Bug Fixing</span>
          </label>
          <div class="tab-content">
            <p>This step can be passed successfully when application runs quicker than expected. Kill a bug, save a day</p>
          </div>
        </div>
        <div class="tab release_tab" data-aos-once="true" data-aos="fade-right">
          <input id="release_tab" type="radio" name="tabs2">
          <label for="release_tab">
            <img class="service_icon" src="@/assets/img/release.png" alt="icon">
            <span>Production</span>
          </label>
          <div class="tab-content">
            <p>The launch phase. After all checked and re-checked on a website, it’s time to upload it to a Live server</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'ServicesComponent',
  data () {
    return {
      service: 0
    }
  },
  mounted: function () {
    let self = this
    $(document).scroll(function () {
      let viewportheight = $(window).height()
      let bodyscrollTop = $(this).scrollTop()

      if (!$('.rocket_wrap').hasClass('shown') && viewportheight >= ($('.rocket_wrap').closest('.service_item').offset().top - bodyscrollTop)) {
        self.rocketLaunch()
      }
    })
  },
  methods: {
    getSevice: function (service) {
      console.log(service)
      this.service = service
    },

    rocketLaunch: function () {
      $('.rocket_wrap').addClass('shown')
      $('.trail').addClass('active')
      $('.rocket_wrap').closest('.service_item').outerHeight()
      setTimeout(function () {
        $('.clouds_new_wrap').addClass('active')
      }, 2000)
      setTimeout(function () {
        $('.clouds_new_wrap').removeClass('active')
        $('.rocket_wrap').css('top', '-' + ($('.rocket_wrap').offset().top + 500) + 'px')
      }, 6000)
      setTimeout(function () {
        $('.trail').removeClass('active')
        $('.rocket_wrap').css('opacity', 0)
      }, 9000)
      setTimeout(function () {
        $('.rocket_wrap').css('top', ('calc(50% - 50px)'))
      }, 12000)
      setTimeout(function () {
        $('.rocket_wrap').css('opacity', 1)
      }, 14000)
    }
  }
}
</script>

<style lang="scss" scoped="">
  .mt100 {
    margin-top: 100px;
  }
</style>
