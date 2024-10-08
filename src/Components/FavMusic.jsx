// import React from "react";
import { useFavorite } from '../Components/contextAPI/favouriteContext';
import Musics from './Musics';

export default function FavMusic() {
  const { favorites } = useFavorite();

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mt-6">Favorite Songs</h2>
      {favorites.length > 0 ? (
        <ul className="mt-4">
          {favorites.map((music) => (
            <Musics key={music.id} {...music} />
          ))}
        </ul>
      ) : (
        <p className="text-white">No favorite songs yet.</p>
      )}
    </div>
  );
}
