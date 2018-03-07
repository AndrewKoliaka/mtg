// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'
import './assets/style.scss'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBtF25eX_bIre9EcrsbzhsEh5leAVZd3CA',
  authDomain: 'mtg-builder-7e7cc.firebaseapp.com',
  databaseURL: 'https://mtg-builder-7e7cc.firebaseio.com',
  projectId: 'mtg-builder-7e7cc',
  storageBucket: 'mtg-builder-7e7cc.appspot.com',
  messagingSenderId: '313456985767'
}

firebase.initializeApp(config)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
