import axios from 'axios';

const fetcher = axios.create({
    // baseURL: 'https://shrouded-caverns-22782.herokuapp.com',
    baseURL: 'http://localhost:5000',
});

export default fetcher;