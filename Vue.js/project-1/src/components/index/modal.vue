<template>
  <transition name="modal">
    <div class="modal" v-show="show">
      <div class="back" @click="close"></div>
      <div class="form_wrap">
        <h3>Feel free to ask anything</h3>
        <div class="send_form">
          <div class="error" v-if="error">All fields need to be filled</div>

          <div class="input-group" v-bind:class="{ 'input-error': $v.model.name.$error }">
            <label for="name">your name</label>
            <input id="name" type="text" name="name" placeholder="Name" v-model.trim="model.name" @input="$v.model.name.$touch()">

            <span class="error" v-if="$v.model.name.$error && !$v.model.name.required">Field is required</span>
            <span class="error" v-if="$v.model.name.$error && !$v.model.name.minLength">Name must have at least {{$v.model.name.$params.minLength.min}} letters.</span>
          </div>

          <div class="input-group" v-bind:class="{ 'input-error': $v.model.mail.$error }">
            <label for="email">your e-mail</label>
            <input id="email" type="text" name="email" placeholder="E-mail" v-model.trim="model.mail" @input="$v.model.mail.$touch()">

            <span class="error" v-if="$v.model.mail.$error && !$v.model.mail.required">Field is required</span>
            <span class="error" v-if="$v.model.mail.$error && !$v.model.mail.email">Email is not valid.</span>
          </div>

          <div class="input-group" v-bind:class="{ 'input-error': $v.model.message.$error }">
            <label for="message">message</label>
            <textarea id="message" name="message" cols="30" rows="10" placeholder="Say something nice" v-model.trim="model.message" @input="$v.model.message.$touch()"></textarea>

            <span class="error" v-if="$v.model.message.$error && !$v.model.message.required">Field is required</span>
          </div>

          <button class="btn blue_gradient" type="submit" @click="send">send message <i class="lnr lnr-rocket"></i></button>
          <img class="close_modal" src="@/assets/img/close_ico.png" alt="close" @click="close">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'ModalComponent',
  props: ['show'],
  data () {
    return {
      error: false,
      model: {
        name: '',
        message: ''
      }
    }
  },
  validations: {
    model: {
      mail: {
        required,
        email
      },
      name: {
        required,
        minLength: minLength(4)
      },
      message: {
        required
      }
    }
  },
  methods: {
    close () {
      console.log('Close')
      // Some save logic goes here...
      this.$emit('close')
    },
    send () {
      if (this.$v.$invalid) {
        this.error = true
        return false
      }

      // Todo - Node.js API Server
      try {
        window.open('mailto:hello@deluxcode.com?subject=' + this.model.name + ' sent message&body=' + this.model.message)
        this.close()
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted: function () {
    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        this.close()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .btn.blue_gradient .lnr {
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }

  .modal-enter-active, .modal-leave-active {
    transition: opacity .3s;
  }
  .modal-enter, .modal-leave-to {
    opacity: 0;
  }
</style>
