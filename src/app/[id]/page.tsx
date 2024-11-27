import api from "@/api";
import Link from "next/link";
import RestaurantCard from "../components/RestaurantCard";

// generate Metadata from api response to render a dynamic page
export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return (
    <>
      <RestaurantCard restaurant={restaurant} />
      <Link href="/" className="hover:underline text-blue-500 align-middle text-md font-semibold mt-6 cursor-pointer inline-flex flex-nowrap">back</Link>
    </>
  )
}
