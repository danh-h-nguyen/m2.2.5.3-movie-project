import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";

import apiService from "../app/apiService";
import MovieCard from "../components/MovieCard";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await apiService.get("/discover/movie");
        setMovies(res.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <Container>
      <Box>{console.log(movies)}</Box>
      <MovieCard movie={movies}></MovieCard>
    </Container>
  );
}

export default HomePage;
