<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">MTG Editor</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a @click.prevent="logout" href="#">Log out</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
