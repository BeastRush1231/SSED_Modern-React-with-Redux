import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3214dc0ca13e3102552436890fc8f1a0d120eb7104981594107c006af1b745bc'
  }
});