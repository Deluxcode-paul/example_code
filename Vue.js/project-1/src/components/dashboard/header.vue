<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img src="@/assets/img/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Deluxcode
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link :to="{name: 'dashboard'}" class="nav-link">
            Dashboard
          </router-link>
        </li>
      </ul>
      <div class="my-2 my-lg-0">
        <button v-on:click="logout" class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '@/firebase.js'

export default {
  name: 'HeaderDashboard',
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
