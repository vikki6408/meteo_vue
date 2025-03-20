<template>
  <h1>Météo d'une ville</h1>
  <p>Entrez une ville :</p>
  <input type="text" v-model="this.city" />
  <button @click="search">Rechercher</button>
  <HelloWorld :meteodetail="info"></HelloWorld>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MeteoService from '@/services/MeteoService'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      city: '',
      info: null,
    }
  },
  methods: {
    search() {
      MeteoService.getMeteo(this.city)
        .then((reponse) => {
          this.info = reponse.data
        })
        .catch(() => {
          this.info = null
        })
    },
  },
}
</script>

<style scoped></style>
