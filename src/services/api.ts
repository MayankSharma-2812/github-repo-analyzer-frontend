import axios from "axios";

const api = axios.create({
  baseURL: "https://github-repo-analyzer-api.onrender.com/"
});
  
export default api;
