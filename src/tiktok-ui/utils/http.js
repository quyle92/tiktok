import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export const get = async (path, options = {}) => {
    const res = await http.get(path, options);
    return res.data;
}

export default http;