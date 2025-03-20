<template>
  <div class="home" v-if="meteoSteCroix">
    <h1>Météo de Ste-Croix</h1>
    <image src="icon"></image>
    <HelloWorld :meteodetail="meteoSteCroix" />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import MeteoService from '@/services/MeteoService'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    //HelloWorld,
  },
  data() {
    return {
      meteoSteCroix: null,
      city: 'Sainte-Croix',
      icon: String,
    }
  },
  created() {
    MeteoService.getMeteo(this.city)
      .then((response) => {
        this.meteoSteCroix = response.data
        console.log(this.meteoSteCroix)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
