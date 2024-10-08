import "./App.css";
// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import Playlist from "./Pages/PlayList";
import { FavoriteProvider } from "./Components/contextAPI/favouriteContext";
import PlayMusic from "./Pages/PlayMusic";

function App() {
  return (
    <FavoriteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playmusic/:id" element={<PlayMusic/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  );
}

export default App;
