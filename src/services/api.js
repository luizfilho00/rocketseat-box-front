import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketseat-box.herokuapp.com',
});

export default api;