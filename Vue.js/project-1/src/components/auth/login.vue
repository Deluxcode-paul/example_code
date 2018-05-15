<template>
  <div class="login">
    <h3>Sign In</h3>
    <p v-if="error">{{error}}</p>
    <input type="email" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button v-on:click="login" class="btn">Go</button>
    <p><router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          return this.$router.replace('dashboard')
        },
        (error) => {
          alert(error.message)
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
