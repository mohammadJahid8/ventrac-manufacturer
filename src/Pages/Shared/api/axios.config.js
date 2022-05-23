import axios from 'axios';

const fetcher = axios.create({
    baseURL: 'https://shrouded-caverns-22782.herokuapp.com',
});

export default fetcher;