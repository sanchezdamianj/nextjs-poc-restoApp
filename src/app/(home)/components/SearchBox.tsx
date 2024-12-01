'use client'

import Form from 'next/form';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {

  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const query = formData.get('query');

    router.push(`/?q=${query}`);

  }

  return (
    <Form
      className="mb-4 inline-flex gap-2"
      onSubmit={handleSubmit}
      action={'/'}
    >
      <input
        className="px-2"
        defaultValue={searchParams.get('q') || ''}
        name="query"
        placeholder="Search..."
        type="search"
      />
      <button className='bg-white/20 p-2' type="submit">Search</button>
    </Form>
  )

}
