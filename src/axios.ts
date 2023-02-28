import axios from 'axios'

const instance = axios.create({
    baseURL: "https://geo.ipify.org/api/v2/country,city?apiKey=at_Te8eTEKo9BxEJzfDEbMA5uGBc50mL&"
})

export default instance;