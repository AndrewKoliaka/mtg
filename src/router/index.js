import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'
import routes from './routes'

Vue.use(Router)

let router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('auth')
  } else if (!requiresAuth && currentUser) {
    next('home')
  } else {
    next()
  }
})

export default router
