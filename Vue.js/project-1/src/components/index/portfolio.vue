<template>
  <section id="portfolio" class="portfolio">

    <div class="prortfolio_header">
      <div class="text_center" data-aos-once="true" data-aos="fade-down">
        <h2>Our Recent Projects</h2>
      </div>
    </div>

    <div class="project" v-for="item in projects" :key="item['.key']">
      <h4 class="project_title_mob"><router-link v-bind:to="{name: 'ProjectComponent', params: {name: item.url}}">{{item.title}}</router-link></h4>

      <router-link v-bind:to="{name: 'ProjectComponent', params: {name: item.url}}" class="project_image">
          <img  v-for="(image, index) in item.images" :key="image['.key']" v-bind:src="'/static/' + image.url" :alt="item.title" :data-aos-once="true" :data-aos="image.anim !='none' ? image.anim : ''" :class="{'additional_image': index > 0}">
      </router-link>

      <div class="container">
        <div class="project_descr">
          <h4 data-aos-once="true" :data-aos="item.title_anim"><router-link v-bind:to="{name: 'ProjectComponent', params: {name: item.url}}">{{item.title}}</router-link></h4>

          <h5 class="orange" data-aos-once="true" :data-aos="item.description_title_anim">{{item.description_title}}</h5>
          <p data-aos-once="true" :data-aos="item.description_text_anim" v-html="item.description_text"></p>

          <h5 class="blue" data-aos-once="true" :data-aos="item.subdescription_title_anim">{{item.subdescription_title}}</h5>
          <p data-aos-once="true" :data-aos="item.subdescription_text_anim">{{item.subdescription_text}}</p>

          <div class="techs" data-aos-once="true" :data-aos="item.tags_anim">
            <span v-for="tag in item.tags" :key="tag">{{tag}}</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import firebase from '@/firebase.js'
import $ from 'jquery'

export default {
  name: 'PortfolioComponent',
  firebase: {
    projects: firebase.database().ref('projects').orderByChild('order')
  },
  created: async function () {
    try {
      $(document).ready(function () {
        $(document).scroll(function () {
          var viewportheight = $(window).height()
          var viewporwidth = $(window).width()
          var bodyscrollTop = $(this).scrollTop()

          if (viewporwidth <= 1000) {
            $('.additional_image').css('top', (((bodyscrollTop - viewportheight) / 100)) + '%')
          } else {
            $('.additional_image').css('top', (((bodyscrollTop - viewportheight) / 100)) + '%')
          }
        })
      })
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .prortfolio_header h2 {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 45px;
    color: #33ccff;
    line-height: 60px;
    text-align: center;
    padding: 60px 0 0;
  }
</style>
