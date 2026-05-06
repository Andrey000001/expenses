import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

export default instance;

instance.interceptors.request.use(
  function (config) {
    const userData = localStorage.getItem('userData');

    const token = JSON.parse(userData)?.token;
    

    if (!token) {
      return config;
    }
    
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

instance.interceptors.response.use(null, function (err) {
  if (err.status === 403) {
    localStorage.removeItem('userData');
    return (window.location.href = '/login');
  }
  console.log(err.status);
});
