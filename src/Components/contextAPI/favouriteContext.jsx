import { createContext, useState, useContext } from "react";


const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (music) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === music.id)
        ? prev.filter((item) => item.id !== music.id)
        : [...prev, music]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoriteContext);
