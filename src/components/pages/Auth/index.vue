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
        <div v-if="formError" class="row">
          <div class="red-text">
            {{formError}}
          </div>
        </div>
        <div class="row">
          <button class="waves-effect waves-light btn left" @click.prevent="signIn">Login</button>
          <button class="waves-effect waves-light btn right" @click.prevent="signUp">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters({formError: 'getFormError'})
  },
  methods: {
    ...mapActions(['login', 'register']),
    async signIn () {
      await this.login({email: this.email, password: this.password})
      this.$router.push({path: '/home'})
    },
    async signUp () {
      await this.register({email: this.email, password: this.password})
    }
  }
}
</script>
