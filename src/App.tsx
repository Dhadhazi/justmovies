import React, { useState } from "react";
import { Header } from "./Components/Header/Header";
import { MovieList } from "./Components/MovieList/MovieList";

function App() {
  const [search, setSearch] = useState<string>("Harry Potter");

  return (
    <div>
      <Header />
      <MovieList search={search} />
    </div>
  );
}

export default App;
