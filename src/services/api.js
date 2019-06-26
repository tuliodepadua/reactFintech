import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    // baseURL: 'https://damp-crag-21009.herokuapp.com'
})

export default api;