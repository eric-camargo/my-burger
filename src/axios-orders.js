import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-a2f29.firebaseio.com/'
});

export default instance;
