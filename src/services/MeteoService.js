import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getMeteo(city) {
    return apiClient.get(
      `/weather?q=${city}&appid=a7a50ce79c2594538567dbade96d79d7&units=metric&lang=fr`
    )
    // return axios.get(
    //   'https://api.openweathermap.org/data/2.5/weather?q=Sainte-Croix&appid=a7a50ce79c2594538567dbade96d79d7&units=metric&lang=fr'
    // )
  },
}
