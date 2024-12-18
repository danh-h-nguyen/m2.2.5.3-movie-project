// import React, { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";

// import apiService from "./app/apiService";
import HomePage from "./pages/HomePage";

function App() {
  //   const [movies, setMovies] = useState([]);
  //   const [error, setError] = useState("");

  //   useEffect(() => {
  //     const getMovies = async () => {
  //       try {
  //         const res = await apiService.get("/discover/movie");
  //         setMovies(res.data);
  //         setError("");
  //       } catch (error) {
  //         console.log(error);
  //         setError(error.message);
  //       }
  //     };
  //     getMovies();
  //   }, []);

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      {/* <Stack>{console.log(movies)}</Stack> */}
      <Stack>
        <HomePage></HomePage>
      </Stack>
    </Container>
  );
}

export default App;
