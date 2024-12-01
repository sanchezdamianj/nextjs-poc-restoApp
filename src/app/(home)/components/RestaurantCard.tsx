'use client'

import { type Restaurant } from "@/types";
import dynamic from "next/dynamic";
import Link from 'next/link';
import FavoriteButton from "./DynamicFavoriteButton";


const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false })

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {

  return (
    <article
      key={restaurant.id}
      className="transform overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-md transition-transform duration-300 hover:scale-105"
    >
      <Link href={`/${restaurant.id}`} key={restaurant.id}>
        <img
          alt={restaurant.name}
          className="h-[200px] w-full object-cover transition-opacity duration-300"
          src={restaurant.image}
        />
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-white">{restaurant.name}</h2>
        <div className="mb-2 flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
            ⭐
          </span>
          <span className="text-lg font-semibold text-yellow-400">{restaurant.score}</span>
          <span className="text-sm text-gray-400 opacity-75">({restaurant.ratings} ratings)</span>
          <DynamicFavoriteButton restaurant={restaurant} />
        </div>
        <p className="text-gray-300">{restaurant.description}</p>
      </div>
    </article>
  );
}

export default RestaurantCard;
