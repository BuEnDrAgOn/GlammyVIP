import axios from 'axios'
 

const BereApi = axios.create({
    // baseURL: process.env.VUE_APP_API_URL
    baseURL: 'http://137.184.46.65:9393/api/'
})

BereApi.defaults.headers.common["Content-Type"] = 'application/json';

export default BereApi