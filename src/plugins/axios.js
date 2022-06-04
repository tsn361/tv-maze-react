import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: false,
  headers: {
    //'Accept': 'application/json',
  }
})

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  //handle error
  return Promise.reject(error);
});

axiosInstance.defaults.baseURL = "https://api.tvmaze.com";
export default axiosInstance
