import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import * as types from './mutation-types'

Vue.use(Vuex)

export const state = {
  uid: null,
  db: null,
  decks: {},
  formError: ''
}

export const getters = {
  isLoggedIn (state) {
    return state.uid
  },
  getFormError (state) {
    return state.formError
  },
  getDBReference (state) {
    return state.db
  },
  getDecks (state) {
    return state.decks
  }
}

export const actions = {
  async login ({commit}, { email, password }) {
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      commit(types.USER_LOGIN, user.uid)
      return user
    } catch (err) {
      commit(types.SET_FORM_ERROR, err.message)
      throw err
    }
  },
  async register ({commit}, { email, password }) {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      commit(types.USER_LOGIN, user.uid)
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
      return res
    } catch (err) {
      throw err
    }
  },
  async deleteDeck ({commit, state}, name) {
    try {
      await state.db.ref(`${state.uid}/decks/${name}`).remove()
      commit(types.DELETE_DECK, name)
    } catch (err) {
      throw err
    }
  },
  async setDeck ({commit, state}, deck) {
    try {
      await state.db.ref(`${state.uid}/decks/${deck.name}`).set(deck.cards)
      commit(types.SET_DECK, deck)
    } catch (err) {
      throw err
    }
  },
  async getAllDecks ({commit, state}) {
    try {
      const res = await state.db.ref(`${state.uid}/decks`).once('value')
      commit(types.SET_DECKS, res.val())
      return res.val()
    } catch (err) {
      throw err
    }
  }
}

export const mutations = {
  [types.USER_LOGIN] (state, uid) {
    state.uid = uid
    state.db = firebase.database()
    state.formError = ''
  },
  [types.USER_LOGOUT] (state) {
    state.uid = null
    state.db = null
  },
  [types.SET_FORM_ERROR] (state, error) {
    state.formError = error
  },
  [types.SET_DECKS] (state, decks) {
    state.decks = decks || {}
  },
  [types.SET_DECK] (state, {name, cards}) {
    state.decks[name] = cards
  },
  [types.DELETE_DECK] (state, deckName) {
    delete state.decks[deckName]
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
