import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:  {
    api_key:  '4869f22d7f395baec68e3acb8d9ea9a2',
    language: 'ko_KR'
  }
});

export default instance;
