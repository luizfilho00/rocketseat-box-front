import axios from 'axios';

const api = axios.create({
    baseURL: 'http://rocketseat-box.herokuapp.com',
});

export default api;