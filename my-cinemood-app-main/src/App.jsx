// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroCard from "./components/HeroCard/HeroCard";
import SignInPopup from "./components/SignInPopup/SignInPopup";
import MovieModal from "./components/MovieModal/MovieModal";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { assets } from "./assets/assets";
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    { id: 1, title: "Inception", description: "A mind-bending thriller", poster: assets.inception },
    { id: 2, title: "Interstellar", description: "Space and time adventure", poster: assets.interstellar },
    { id: 3, title: "The Dark Knight", description: "Gotham's savior", poster:assets.dark  },
    { id: 4, title: "Tenet", description: "Time inversion sci-fi", poster:assets.tenet },
    { id: 5, title: "The Prestige", description: "Magicians and mystery", poster:assets.prestige  },
    { id: 6, title: "Dunkirk", description: "World War II evacuation", poster:assets.dunkirk  },
    { id: 7, title: "Memento", description: "Memory and revenge", poster:assets.memento },
    { id: 8, title: "Avatar", description: "Alien world Pandora", poster:assets.avatar  },
    { id: 9, title: "The Matrix", description: "Virtual reality dystopia", poster:assets.matrix  },
    { id: 10, title: "Gladiator", description: "Roman empire revenge", poster:assets.gladiator  },
    { id: 11, title: "Avengers: Endgame", description: "Superhero epic finale", poster:assets.avengers },
    { id: 12, title: "Parasite", description: "Korean social thriller", poster:assets.parasite  },
    { id: 13, title: "Joker", description: "Villain origin story", poster: assets.joker },
    { id: 14, title: "Ford v Ferrari", description: "Racing and rivalry", poster: assets.ford},
    { id: 15, title: "1917", description: "One-shot WWI mission", poster: assets.nine},
  ];

  const toggleTheme = () => setDarkMode(prev => !prev);
  const handleSignIn = () => setIsSignInOpen(true);
  const closeSignIn = () => setIsSignInOpen(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar
        onThemeToggle={toggleTheme}
        darkMode={darkMode}
        onSearchChange={e => setSearchTerm(e.target.value)}
        onSignIn={handleSignIn}
      />
      <Header darkMode={darkMode}/>
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <HeroCard
            key={movie.id}
            movie={movie}
            onClick={() => openModal(movie)}
          />
        ))}
      </div>

      {isSignInOpen && <SignInPopup onClose={closeSignIn} />}
      {isModalOpen && selectedMovie && <MovieModal movie={selectedMovie} onClose={closeModal} />}
      <Footer darkMode={darkMode}/>
    </div>
  );
};

export default App;
