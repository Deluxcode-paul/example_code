import Vue from 'vue'
import Router from 'vue-router'

import firebase from 'firebase'

import Index from '@/components/index'

import Login from '@/components/auth/login'
import SignUp from '@/components/auth/signup'

import Dashboard from '@/components/dashboard/main'
import AddComponent from '@/components/dashboard/add'
import EditComponent from '@/components/dashboard/edit'
import ListComponent from '@/components/dashboard/list'

import ProjectComponent from '@/components/project/project'

import Counter from '@/components/counter'
import Careers from '@/components/careers'
import PageNotFound from '@/components/pagenotfound'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode!!!
// - return false to prevent scroll
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return {savedPosition}
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return {x: 0, y: 0}
  }
}

let router = new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'dashboard',
          component: ListComponent
        },
        {
          path: 'add',
          name: 'dashboard.add',
          component: AddComponent
        },
        {
          path: 'project/:name',
          name: 'dashboard.project',
          component: EditComponent
        }
      ]
    },
    {
      path: '/project/:name',
      name: 'ProjectComponent',
      component: ProjectComponent
    },
    {
      path: '404',
      name: '404Page',
      component: PageNotFound
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser && (to.name === 'Login' || to.name === 'SignUp')) next('dashboard')
  else next()
})

export default router
