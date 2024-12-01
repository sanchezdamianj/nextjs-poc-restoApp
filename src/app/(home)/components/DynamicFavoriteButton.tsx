'use client'

import { Restaurant } from "@/types";
import React, { useEffect, useState } from 'react';

export default function FavoriteButton({restaurant}: {restaurant: Restaurant}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(restaurant.id));
  }, [restaurant.id]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites') || '[]');

    if (!Array.isArray(favorites)) {
      console.error('Favorites is not an array, resetting to empty array.');
      window.localStorage.setItem('favorites', JSON.stringify([]));
      return;
    }

    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: string) => id !== restaurant.id);
      window.localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      window.localStorage.setItem('favorites', JSON.stringify([...favorites, restaurant.id]));
      setIsFavorite(true);
    }
  }

  return (
    <button
      type='button'
      className={`text-red-500 text-xl ${isFavorite ? 'opacity-100' : 'opacity-20'}`}
      onClick={(event) => handleClick(event)}
    >
      ❤️
    </button>
  )
}
