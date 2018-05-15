<template>
  <div id="home" class="careers">
    <header data-aos-once="true" data-aos="fade-down">
      <div class="container">
        <div class="nav_block">
          <div class="sandwich">
            <div class="piece top"></div>
            <div class="piece middle"></div>
            <div class="piece bottom"></div>
          </div>
          <nav class="animate">
            <router-link to="/">Home</router-link>
            <router-link to="/#services" v-smooth-scroll>Service</router-link>
            <router-link to="/#portfolio" v-smooth-scroll>Portfolio</router-link>
            <router-link to="/#home" v-smooth-scroll>Work Flow</router-link>
            <router-link to="/#home" v-smooth-scroll>Team</router-link>
            <router-link to="careers" v-smooth-scroll>Careers</router-link>
            <router-link to="/#contact" v-smooth-scroll>Contact</router-link>
          </nav>
        </div>
      </div>
    </header>
    <section class="top_section">
      <div class="blue_box blue_box1">
        <div class="blue_box2">
          <div class="bule_box3"></div>
        </div>
      </div>

      <div class="box_wrap" v-parallax="-0.2">
        <div class="blue_box blue_box_md"></div>
      </div>
      <div class="box_wrap" v-parallax="0.6">
        <div class="blue_box blue_box_sm box1"></div>
      </div>

      <div class="box_wrap" v-parallax="0.3">
        <div class="blue_box blue_box_sm box2"></div>
      </div>
      <div class="box_wrap" v-parallax="-0.5">
        <div class="blue_box blue_box_xs box1"></div>
      </div>
      <div class="box_wrap" v-parallax="0.6">
        <div class="blue_box blue_box_xs box2"></div>
      </div>
      <div class="box_wrap" v-parallax="0.1">
        <div class="blue_box blue_box_xs box3"></div>
      </div>

      <div class="text_block">
        <h1>Careers</h1>
        <p>Delivering pixel-perfect digital developments with open-source solutions such as Laravel & WordPress</p>
        <button class="btn">Get more info</button>
      </div>
      <div class="blue_box blue_box_xs box4"></div>
      <div class="decor_lines lines1"></div>
      <div class="decor_lines lines2"></div>
    </section>
    <section class="content">
      <div class="container">
        <div class="vacancies">
          <div class="vacancy">
            <div class="vacancy_header">
              <h2 class="vacancy_name">Multimedia Artist Developer</h2>
              <div class="icon">
                <div class="line1"></div>
                <div class="line2"></div>
              </div>
            </div>
            <div class="vacancy_descr">
              <p>We are looking for highly agile Multimedia Artist Developers who have passion in both design and HTML. The role will provide exposure to general multimedia arts design and front end web development.</p>
              <h3>Qualifications and Requirements:</h3>
              <ul>
                <li>Has passion in both multimedia arts design and front end web development.</li>
                <li>Intermediate in Adobe Photoshop.</li>
                <li>Intermediate in HTML and CSS.</li>
                <li>Basic in Javascript and PHP (or willing to learn).</li>
                <li>Strong drive to learn new skills with minimal supervision.</li>
                <li>Has a good design sense of color, layout and typography.</li>
                <li>Has creative conceptualization ability as well as technical execution capability in terms of HTML, CSS and Javascript.</li>
                <li>Has the ability to work independently or as part of a team.</li>
                <li>Strong communication and organization skills.</li>
                <li>Able to multi-task and can gracefully handle pressure.</li>
                <li>Applicants must be willing to work in Makati.</li>
                <li>Minimum 1 year work experience. Fresh graduates with design and front end web development exposure, with above average academic standing, are welcome to apply in lieu of 1 year minimum work experience.</li>
              </ul>
              <p>If you are interested to be part of our growing team of creative and tech geeks, please send your application to <a href="mailto:careers@7thmedia.com">careers@7thmedia.com</a> and include the following requirements.</p>
              <ul>
                <li>Resume</li>
                <li>Email Cover Letter</li>
                <li>Copy of Grades / Transcript of Records</li>
                <li>Portfolio</li>
              </ul>
              <p>Shortlisted applicants will be notified of next steps via email. Due to volume of applications, incomplete applications may not be considered.</p>
              <button class="btn" @click="showModal = true">Multimedia Artist <img src="/static/careers/btn-arrow.png" alt="arrow"></button>
            </div>
          </div>
          <div class="vacancy">
            <div class="vacancy_header">
              <h2 class="vacancy_name">Multimedia Artist Developer</h2>
              <div class="icon">
                <div class="line1"></div>
                <div class="line2"></div>
              </div>
            </div>
            <div class="vacancy_descr">
              <p>We are looking for highly agile Multimedia Artist Developers who have passion in both design and HTML. The role will provide exposure to general multimedia arts design and front end web development.</p>
              <h3>Qualifications and Requirements:</h3>
              <ul>
                <li>Has passion in both multimedia arts design and front end web development.</li>
                <li>Intermediate in Adobe Photoshop.</li>
                <li>Intermediate in HTML and CSS.</li>
                <li>Basic in Javascript and PHP (or willing to learn).</li>
                <li>Strong drive to learn new skills with minimal supervision.</li>
                <li>Has a good design sense of color, layout and typography.</li>
                <li>Has creative conceptualization ability as well as technical execution capability in terms of HTML, CSS and Javascript.</li>
                <li>Has the ability to work independently or as part of a team.</li>
                <li>Strong communication and organization skills.</li>
                <li>Able to multi-task and can gracefully handle pressure.</li>
                <li>Applicants must be willing to work in Makati.</li>
                <li>Minimum 1 year work experience. Fresh graduates with design and front end web development exposure, with above average academic standing, are welcome to apply in lieu of 1 year minimum work experience.</li>
              </ul>
              <p>If you are interested to be part of our growing team of creative and tech geeks, please send your application to <a href="mailto:careers@7thmedia.com">careers@7thmedia.com</a> and include the following requirements.</p>
              <ul>
                <li>Resume</li>
                <li>Email Cover Letter</li>
                <li>Copy of Grades / Transcript of Records</li>
                <li>Portfolio</li>
              </ul>
              <p>Shortlisted applicants will be notified of next steps via email. Due to volume of applications, incomplete applications may not be considered.</p>
              <button class="btn">Multimedia Artist <img src="/static/careers/btn-arrow.png" alt="arrow"></button>
            </div>
          </div>
          <div class="vacancy">
            <div class="vacancy_header">
              <h2 class="vacancy_name">Multimedia Artist Developer</h2>
              <div class="icon">
                <div class="line1"></div>
                <div class="line2"></div>
              </div>
            </div>
            <div class="vacancy_descr">
              <p>We are looking for highly agile Multimedia Artist Developers who have passion in both design and HTML. The role will provide exposure to general multimedia arts design and front end web development.</p>
              <h3>Qualifications and Requirements:</h3>
              <ul>
                <li>Has passion in both multimedia arts design and front end web development.</li>
                <li>Intermediate in Adobe Photoshop.</li>
                <li>Intermediate in HTML and CSS.</li>
                <li>Basic in Javascript and PHP (or willing to learn).</li>
                <li>Strong drive to learn new skills with minimal supervision.</li>
                <li>Has a good design sense of color, layout and typography.</li>
                <li>Has creative conceptualization ability as well as technical execution capability in terms of HTML, CSS and Javascript.</li>
                <li>Has the ability to work independently or as part of a team.</li>
                <li>Strong communication and organization skills.</li>
                <li>Able to multi-task and can gracefully handle pressure.</li>
                <li>Applicants must be willing to work in Makati.</li>
                <li>Minimum 1 year work experience. Fresh graduates with design and front end web development exposure, with above average academic standing, are welcome to apply in lieu of 1 year minimum work experience.</li>
              </ul>
              <p>If you are interested to be part of our growing team of creative and tech geeks, please send your application to <a href="mailto:careers@7thmedia.com">careers@7thmedia.com</a> and include the following requirements.</p>
              <ul>
                <li>Resume</li>
                <li>Email Cover Letter</li>
                <li>Copy of Grades / Transcript of Records</li>
                <li>Portfolio</li>
              </ul>
              <p>Shortlisted applicants will be notified of next steps via email. Due to volume of applications, incomplete applications may not be considered.</p>
              <button class="btn">Multimedia Artist <img src="/static/careers/btn-arrow.png" alt="arrow"></button>
            </div>
          </div>
          <div class="vacancy">
            <div class="vacancy_header">
              <h2 class="vacancy_name">Multimedia Artist Developer</h2>
              <div class="icon">
                <div class="line1"></div>
                <div class="line2"></div>
              </div>
            </div>
            <div class="vacancy_descr">
              <p>We are looking for highly agile Multimedia Artist Developers who have passion in both design and HTML. The role will provide exposure to general multimedia arts design and front end web development.</p>
              <h3>Qualifications and Requirements:</h3>
              <ul>
                <li>Has passion in both multimedia arts design and front end web development.</li>
                <li>Intermediate in Adobe Photoshop.</li>
                <li>Intermediate in HTML and CSS.</li>
                <li>Basic in Javascript and PHP (or willing to learn).</li>
                <li>Strong drive to learn new skills with minimal supervision.</li>
                <li>Has a good design sense of color, layout and typography.</li>
                <li>Has creative conceptualization ability as well as technical execution capability in terms of HTML, CSS and Javascript.</li>
                <li>Has the ability to work independently or as part of a team.</li>
                <li>Strong communication and organization skills.</li>
                <li>Able to multi-task and can gracefully handle pressure.</li>
                <li>Applicants must be willing to work in Makati.</li>
                <li>Minimum 1 year work experience. Fresh graduates with design and front end web development exposure, with above average academic standing, are welcome to apply in lieu of 1 year minimum work experience.</li>
              </ul>
              <p>If you are interested to be part of our growing team of creative and tech geeks, please send your application to <a href="mailto:careers@7thmedia.com">careers@7thmedia.com</a> and include the following requirements.</p>
              <ul>
                <li>Resume</li>
                <li>Email Cover Letter</li>
                <li>Copy of Grades / Transcript of Records</li>
                <li>Portfolio</li>
              </ul>
              <p>Shortlisted applicants will be notified of next steps via email. Due to volume of applications, incomplete applications may not be considered.</p>
              <button class="btn">Multimedia Artist <img src="/static/careers/btn-arrow.png" alt="arrow"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="decor_lines lines3"></div>
      <div class="decor_lines lines4"></div>
      <div class="decor_lines lines5"></div>

      <div class="box_wrap" v-parallax="0.1">
        <div class="blue_box blue_box_xs box5"></div>
      </div>
      <div class="box_wrap" v-parallax="-0.3">
        <div class="blue_box blue_box_xs box6"></div>
      </div>
      <div class="box_wrap" v-parallax="0.2">
        <div class="blue_box blue_box_xs box7"></div>
      </div>

      <div class="box_wrap" v-parallax="-0.4">
        <div class="blue_box blue_box1">
          <div class="blue_box2">
            <div class="bule_box3"></div>
          </div>
        </div>
      </div>
    </section>

    <ping-us>
      <div class="box_wrap" v-parallax="-0.3">
        <div class="blue_box blue_box1">
          <div class="blue_box2">
            <div class="bule_box3"></div>
          </div>
        </div>
      </div>
    </ping-us>

    <footer-component></footer-component>

<!--     <section class="ping_us">
      <div class="container">
        <h4 data-aos-once="true" data-aos="zoom-out-up">We provide full-cycle web development</h4>
        <p data-aos-once="true" data-aos="zoom-out-down">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button class="btn blue_gradient open_modal" data-aos-once="true" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">ping us</button>
      </div>
    </section>
 --><!--     <footer id="contact">
      <div class="container">
        <div class="logo">
          <img src="/static/logo.png" alt="logo">
          <span>deluxcode</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Work Flow</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </nav>
        <a class="go_up" href="#home">
          <img class="btn_up" src="/static/up.png" alt="up">
        </a>
      </div>
    </footer>
 -->    <!-- <div class="modal">
      <div class="back"></div>
      <div class="form_wrap">
        <h3>Feel free to ask anything</h3>
        <div class="send_form">
          <label for="name">your name</label>
          <input id="name" type="text" name="name" placeholder="Name">
          <label for="email">your e-mail</label>
          <input id="email" type="text" name="email" placeholder="E-mail">
          <label for="message">Phone / Skype</label>
          <input id="phone-skype" type="text" name="phone-skype" placeholder="Phone / Skype">
          <label for="message">message</label>
          <textarea id="message" name="message" cols="30" rows="10" placeholder="Say something nice"></textarea>

          <label class="upload_cv" for="cv">Upload CV<img class="icon" src="img/careers/upload_ico.png" alt="icon"></label>
          <input id="cv" name="cv" type="file" hidden>

          <button class="btn blue_gradient" type="submit">send message <img src="img/rocket_icon.png" alt="icon"></button>
          <img class="close_modal" src="img/close_ico.png" alt="close">
        </div>
      </div>
    </div> -->

    <modal :show="showModal" @close="showModal = false"></modal>

  </div>
</template>

<script>
import $ from 'jquery'

import PingUsComponent from '@/components/index/pingus'
import FooterComponent from '@/components/index/footer'
import ModalComponent from '@/components/index/modal'

export default {
  name: 'Careers',
  components: {
    'ping-us': PingUsComponent,
    'footer-component': FooterComponent,
    'modal': ModalComponent
  },
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    $('.vacancy_header').on('click', function () {
      $(this).find('.icon').toggleClass('active')
      $(this).closest('.vacancy').find('.vacancy_descr').slideToggle(300)
    })

    this.$on('showModal', () => {
      this.showModal = !this.showModal
      console.log(this.showModal)
    })
  }
}
</script>
