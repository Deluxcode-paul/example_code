<template>
  <div class="login">
    <h3>Sign Up</h3>
    <p v-if="error.length > 0">{{error}}</p>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button class="btn" v-on:click="signUp">Create</button>
    <p>Back to <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('add')
        },
        (err) => {
          alert(err)
        }
      )
    }
  }
}
</script>

<style scoped>
  .login {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
