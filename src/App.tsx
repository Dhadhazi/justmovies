import React, { useState } from "react";
import { Header } from "./Components/Header/Header";
import { MovieList } from "./Components/MovieList/MovieList";

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <Header setSearch={setSearch} />
      <MovieList search={search} />
    </div>
  );
}

export default App;
