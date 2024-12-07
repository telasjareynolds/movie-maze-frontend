import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="page">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
