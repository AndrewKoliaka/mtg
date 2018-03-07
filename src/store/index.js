import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import * as types from './mutation-types'

Vue.use(Vuex)

export const state = {
  isLoggedIn: false,
  formError: ''
}

export const getters = {
  isLoggedIn (state) {
    return state.isLoggedIn
  },
  getFormError (state) {
    return state.formError
  }
}

export const actions = {
  async login ({commit}, { email, password }) {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      commit(types.USER_LOGIN)
      console.log('login', user)
      return user
    } catch (err) {
      throw err
    }
  },
  async register ({commit}, { email, password }) {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      commit(types.USER_LOGIN)
      console.log('register', user)
      return user
    } catch (err) {
      commit(types.SET_FORM_ERROR, err.message)
      throw err
    }
  },
  async logout ({commit}) {
    try {
      const res = await firebase.auth().signOut()
      commit(types.USER_LOGOUT)
      console.log('logout', res)
      return res
    } catch (err) {
      throw err
    }
  }
}

export const mutations = {
  [types.USER_LOGIN] (state) {
    state.isLoggedIn = true
    state.formError = ''
  },
  [types.USER_LOGOUT] (state) {
    state.isLoggedIn = false
  },
  [types.SET_FORM_ERROR] (state, error) {
    state.formError = error
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
