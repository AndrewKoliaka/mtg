<template>
  <nav>
    header
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
