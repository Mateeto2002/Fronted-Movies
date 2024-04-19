import axios from 'axios';

const axiosInstance = axios.create(
    {
        baseURL: 'https://backen-movies.onrender.com/'
    }
) 
export{
    axiosInstance,
}