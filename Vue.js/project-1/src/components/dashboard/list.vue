<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title d-flex">
        <h5 class="mr-auto">List of Projects</h5>
        <span>
          <router-link :to="{ name: 'dashboard.add' }" class="btn btn-primary btn-sm">
            Add New Project
          </router-link>
        </span>
      </div>
      <table class="table" v-if="items">
        <tbody>
          <tr v-for="item in items" :key="item.url">
            <td>{{item.title}}</td>
            <td>{{item.description_text}}</td>
            <td width="15%">
              <div class="d-inline">
                <router-link :to="{ name: 'dashboard.project', params: { name: item.url } }" class="btn btn-sm btn-light">
                  Edit
                </router-link>
                <span v-on:click="removeProject(item.url)" class="btn btn-sm btn-danger">
                  Delete
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="text-center">No Items yet</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import toastr from 'toastr'
import firebase from '@/firebase.js'

export default {
  name: 'ListComponent',
  data () {
    return {
      items: []
    }
  },
  created: async function () {
    // async method
    try {
      const response = await axios.get('https://deluxcode-a7cbf.firebaseio.com/projects.json')
      this.items = response.data
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    removeProject: function (item) {
      firebase.database().ref('projects').child(item).remove()
      toastr.success('Project removed successfully')
    }
  }
}
</script>

<style scoped>
  .btn {
    display: unset;
  }
</style>
