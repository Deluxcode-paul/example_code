<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Edit Project <b>'{{project.title}}'</b></h5>
        <form>
          <div class="form-row">
            <div class="col-md-8">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" v-model="project.title">
              <small id="title" class="form-text text-muted">
                Title will display on Main Page and in Title of the Project Page
              </small>
            </div>
            <div class="col-md-4">
              <label for="title_anim">Animation Effect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.title_anim">
              </model-select>
            </div>
          </div>

          <div class="form-group">
            <label for="url">Url</label>
            <input type="text" class="form-control" id="url" v-model="project.url" disabled>
            <small id="url" class="form-text text-muted">
              Unique alias for Project Page
            </small>
          </div>

          <h6 class="text-muted">Information for Main Page</h6>
          <hr/>

          <div class="form-row mb-3">
            <div class="col-md-8">
              <label for="description_title">Description Title</label>
              <input type="text" v-model="project.description_title" class="form-control" id="description_title">
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.description_title_anim">
              </model-select>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="col-md-8">
              <label for="description_text">Description Text</label>
              <textarea v-model="project.description_text" class="form-control" id="description_text"></textarea>
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.description_text_anim">
              </model-select>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="col-md-8">
              <label for="subdescription_title">Subdescription Title</label>
              <input type="text" v-model="project.subdescription_title" class="form-control" id="subdescription_title">
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.subdescription_title_anim">
              </model-select>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="col-md-8">
              <label for="description_text">Subdescription Text</label>
              <textarea v-model="project.subdescription_text" class="form-control" id="subdescription_text"></textarea>
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.subdescription_text_anim">
              </model-select>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="col-md-8">
              <label for="description_text">Tags</label>
              <input-tag class="form-control" :tags="project.tags"></input-tag>
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="project.tags_anim">
              </model-select>
            </div>
          </div>
          <h6>Images</h6>
          <hr/>
          <div class="form-row" v-for="image in project.images" :key="image['.key']">
            <div class="col-md-8">
              <label>Image Url</label>
              <input type="text" v-model="image.url" class="form-control">
            </div>
            <div class="col-md-4">
              <label for="animation">Animation Efect</label>
              <model-select :options="options"
                placeholder="Select the Effect"
                v-model="image.anim">
              </model-select>
            </div>
          </div>
          <button type="button" class="btn btn-success btn-sm" v-on:click="addRow">Add Image</button>
          <button type="button" class="btn btn-danger btn-sm" v-on:click="remRow">Remove Last</button>
          <hr/>
          <div class="form-row">
            <div class="col-md-12">
              <label for="title">Html</label>
              <textarea class="form-control" cols="3" id="title" v-model="project.html"></textarea>
              <small id="title" class="form-text text-muted">
                HTML Code of Project Page
              </small>
            </div>
          </div>
          <button class="btn btn-primary" v-on:click.prevent="addProject">Submit form</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from '@/firebase.js'
import { ModelSelect } from 'vue-search-select'
import InputTag from 'vue-input-tag'
import axios from 'axios'
import toastr from 'toastr'

export default {
  name: 'EditComponent',
  data () {
    return {
      project: {
        title: '',
        title_anim: 'fade-up',
        url: '',
        description_title: '',
        description_title_anim: 'fade-up',
        description_text: '',
        description_text_anim: 'fade-up',
        subdescription_title: '',
        subdescription_title_anim: 'fade-up',
        subdescription_text: '',
        subdescription_text_anim: 'fade-up',
        tags: [],
        tags_anim: 'fade-up',
        images: [{
          url: '',
          anim: 'fade-up'
        }],
        html: ''
      },
      options: [
        { value: 'fade-up', text: 'fade-up' },
        { value: 'fade-down', text: 'fade-down' },
        { value: 'fade-left', text: 'fade-left' },
        { value: 'fade-rigth', text: 'fade-rigth' },
        { value: 'fade-up-left', text: 'fade-up-left' },
        { value: 'fade-up-rigth', text: 'fade-up-rigth' },
        { value: 'fade-down-left', text: 'fade-down-left' },
        { value: 'fade-down-right', text: 'fade-down-right' },
        { value: 'zoom-in', text: 'zoom-in' },
        { value: 'zoom-in-up', text: 'zoom-in-up' },
        { value: 'zoom-in-down', text: 'zoom-in-down' },
        { value: 'zoom-in-left', text: 'zoom-in-left' },
        { value: 'zoom-in-right', text: 'zoom-in-right' },
        { value: 'zoom-out', text: 'zoom-out' },
        { value: 'zoom-out-up', text: 'zoom-out-up' },
        { value: 'zoom-out-down', text: 'zoom-out-down' },
        { value: 'zoom-out-left', text: 'zoom-out-left' },
        { value: 'zoom-out-right', text: 'zoom-out-right' },
        { value: 'slide-up', text: 'slide-up' },
        { value: 'slide-down', text: 'slide-down' },
        { value: 'slide-left', text: 'slide-left' },
        { value: 'slide-right', text: 'slide-right' },
        { value: 'flip-up', text: 'flip-up' },
        { value: 'flip-down', text: 'flip-down' },
        { value: 'flip-left', text: 'flip-left' },
        { value: 'flip-right', text: 'flip-right' }
      ]
    }
  },
  created: async function () {
    // async method
    try {
      const response = await axios.get('https://deluxcode-a7cbf.firebaseio.com/projects/' + this.$route.params.name + '.json')
      this.project = response.data
      console.log(this.project)
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    addRow: function () {
      this.project.images.push({
        url: '',
        anim: 'fade-up'
      })
    },
    remRow: function () {
      this.project.images.pop()
    },
    addProject: function () {
      firebase.database().ref('projects').child(this.$route.params.name).set(this.project).then(
        (ref) => {
          toastr.success('Project edit successfully')
        },
        (err) => {
          console.log(err.message)
        }
      )
    }
  },
  components: {
    ModelSelect,
    InputTag
  }
}
</script>
