import api from "@/api";
import RestaurantCard from "./components/RestaurantCard";
// import SearchBox from "./components/SearchBox";
import { redirect } from "next/navigation";

// export const revalidate = 100;
// export const dynamic = 'force-static';

export default async function HomePage({searchParams}: {searchParams: Promise<{q?: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);
  // const restaurants = await api.list();

  if (restaurants.length === 0) {
    return (
      <p className="text-center text-2xl font-bold">No restaurants found</p>
    )
  }

  async function searchAction(formData: FormData) {
    'use server'

    redirect(`/?q=${formData.get('query')}`);
  }

  return (
    <section>
      {/* //reemplazado por una server action */}
      {/* <SearchBox /> */}

      {/* // begin server action */}
      <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input
          defaultValue={q || ''}
          className="px-2 bg-gray-800/50 border border-gray-600 focus-visible:bg-slate-900"
          name="query"
        />
        <button className='bg-white/20 p-2' type="submit">Search</button>
      </form>
      {/* // end server action */}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {restaurants.map((restaurant) => <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
        )}
      </section>
    </section>
  );
}
