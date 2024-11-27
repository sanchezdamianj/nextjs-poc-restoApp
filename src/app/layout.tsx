
import { Metadata } from "next";
import Link from "next/link";
import "./globals.css";



export const metadata: Metadata = {
  title: "Resto App - The best restos",
  description: "The best restaurants in the world",
  keywords: ['restaurant', 'food', 'foodie', 'eat', 'dinner', 'lunch'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className="your-class-name" lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">

        <header className="text-xl font-bold leading-[3rem]">
          <Link href={'/'}>
            Resto App
          </Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Resto App
        </footer>
      </body>
    </html>
  );
}
