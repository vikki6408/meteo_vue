<template>
  <div v-if="meteodetail" class="hello">
    <img :src="getWeatherIcon" height="350px" />
    <p>Température actuelle: {{ this.meteodetail.main.temp }}</p>
    <p>Température minimum: {{ this.meteodetail.main.temp_min }}</p>
    <p>Température maximum: {{ this.meteodetail.main.temp_max }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    meteodetail: Object,
  },
  computed: {
    getWeatherIcon() {
      return `https://openweathermap.org/img/wn/${this.meteodetail.weather[0].icon}.png`
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
