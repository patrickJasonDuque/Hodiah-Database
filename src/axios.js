import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://hodiah-database-ed30c.firebaseio.com'
});

export default instance;
