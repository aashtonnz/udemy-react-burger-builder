import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-24bfa.firebaseio.com/',
});

export default instance;