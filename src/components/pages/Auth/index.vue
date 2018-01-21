<template>
  <div class="container">
    <div class="auth row">
      <div class="col offset-xl4 xl4">
        <h3 class="left-align">Auth</h3>
      </div>
      <form class="col offset-xl4 xl4">
        <div class="row">
          <div class="input-field col xl12">
            <input v-model="email" id="email-input" type="email" placeholder="lalala@gmail.com" required>
            <label for="email-input">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col xl12">
            <input v-model="password" id="password-input" type="password" placeholder="magic123" required>
            <label for="password-input">Password</label>
          </div>
        </div>
        <div v-if="errorMessage" class="row">
          <div class="red-text">
            {{errorMessage}}
          </div>
        </div>
        <div class="row">
          <button class="waves-effect waves-light btn left" @click.prevent="login">Login</button>
          <button class="waves-effect waves-light btn right" @click.prevent="register">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        console.log(user)
      }, err => {
        console.error(err)

        this.errorMessage = err.message
      })
    },
    register () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        console.log(user)
      }, err => {
        console.error(err)

        this.errorMessage = err.message
      })
    }
  }
}
</script>
