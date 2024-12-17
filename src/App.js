import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import apiService from "./app/apiService";

function App() {
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
      Movie App
      {console.log(movies)}
    </Container>
  );
}

export default App;
