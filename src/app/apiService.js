import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTk4YzkwODE5MDEyZjM5ZDlmMWQ3NTc0OTZhYTM5YiIsIm5iZiI6MTczNDM2MTY1My4xMjUsInN1YiI6IjY3NjA0MjM1Zjg2MzE0NTFiMzdlNmI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZLRqo_Kh4PWZJLEqi1cfr9tED6fynP6h0RvMxzkzs7g",
  },
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start Request", request);
    return request;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    return Promise.reject(error);
  }
);

export default apiService;
