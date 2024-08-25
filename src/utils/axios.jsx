import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzVkMDQ0YmRjNGRjYzNlNzgxMDQ5YTkxMDkzZDY0ZSIsIm5iZiI6MTcyNDYwMjk2Mi45Njg5NDgsInN1YiI6IjY2Y2I1NDNiNTdlZWQ1ZmE3YzBkNDQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NwImPEycwmaiAWksK2i9MnSCiXKFUOIVeW5wSsB9pfg",
  },
});
