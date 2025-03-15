import React, { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/150",
      rating: 9,
    },
    {
      title: "Titanic",
      description: "A romantic drama",
      posterURL: "https://via.placeholder.com/150",
      rating: 8,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = () => {
    const newMovie = {
      title: prompt("Enter movie title:"),
      description: prompt("Enter description:"),
      posterURL: prompt("Enter poster URL:"),
      rating: Number(prompt("Enter rating (1-10):")),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === 0 || movie.rating >= filterRating)
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 My Movie App</h1>
      <button onClick={addMovie}>➕ Add Movie</button>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
