import api from "@/api";
import RestaurantCard from "./components/RestaurantCard";

export default async function HomePage() {
  const restauarants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 p-4 md:grid-cols-2 lg:grid-cols-3">
      {restauarants.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      })}
    </section>
  );
}