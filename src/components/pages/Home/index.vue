<template>
  <div>
    <navbar></navbar>
    <h1>Home</h1>
  </div>
</template>

<script>
import Navbar from '../../shared/Header'

export default {
  components: {
    navbar: Navbar
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: sans-serif;
}
</style>
