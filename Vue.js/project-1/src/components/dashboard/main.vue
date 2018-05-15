<template>
  <div>
    <header-dashboard></header-dashboard>

    <div class="container my-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderDashboard from './header'

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'Dashboard',
  components: {
    'header-dashboard': HeaderDashboard
  },
  meta: {title: 'Deluxcode Dashboard'}
}
</script>

<style scoped>
  /*@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';*/
  @import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css';
</style>
