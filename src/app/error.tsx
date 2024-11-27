
'use client'

interface ErrorPageProps {
    error: string;
}

export default function ErrorPage({ error } : { error: Error})  {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="m-4 text-2xl font-bold">¡Oops! Something went wrong.</h1>
            <p className="m-4 text-lg font-medium">{error.message}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.location.href = '/'}>
                Go home
            </button>
        </div>
    );
};

