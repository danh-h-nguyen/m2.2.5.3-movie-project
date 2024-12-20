import React from "react";
import Grid from "@mui/material/Grid2";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <Grid container spacing={2} mt={1}>
      {movies.map((movie, index) => (
        <Grid key={movie.id} item xs={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieList;
