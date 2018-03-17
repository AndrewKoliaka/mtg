<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">MTG Deck Builder</a>
      <ul class="right hide-on-med-and-down">
        <li><a class="waves-effect waves-light btn" @click="signOut">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout']),
    async signOut () {
      await this.logout()
      this.$router.push({ name: 'Auth' })
    }
  }
}
</script>
