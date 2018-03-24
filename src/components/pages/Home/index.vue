<template>
  <div>
    <v-header></v-header>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <h3 class="center-align">Your decks</h3>
            <div class="center-align" v-if="!isDecksLoaded">
              <div class="preloader-wrapper small active">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
            <br>
          </div>
          <div class="collection" v-else>
            <router-link class="collection-item" :to="{name: 'Editor', params: { deck: name}}" v-for="(cards, name) in userDecks" :key="name">
              {{name}}
            </router-link>
          </div>
        </div>
        <div class="col offset-s2 s8 center-align">
          <button class="waves-effect waves-light btn" @click="createNewDeck">Create new deck
            <i class="material-icons left">add</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from '../../shared/VHeader'
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      isDecksLoaded: false
    }
  },
  components: {
    VHeader
  },
  computed: {
    ...mapGetters({userDecks: 'getDecks'})
  },
  methods: {
    ...mapActions(['getAllDecks']),
    createNewDeck () {
      this.$router.push({name: 'Editor'})
    }
  },
  async mounted () {
    await this.getAllDecks()
    this.isDecksLoaded = true
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: sans-serif;
}
</style>
