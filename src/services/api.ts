import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTJjZDYzOGU3NDg5ZDJjYzE3YjI0MzRmNWM0ODliYSIsIm5iZiI6MTcyNDQzNzYwMS43ODk3Niwic3ViIjoiNjE1YjQxYWI2ZWUzZDcwMDhkMWY4MjY4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.H-KHRMPkXIjm5_pakAWhI0WBXrdwlh0tGgcCX0gcfnQ",
  },
});

export default api;
