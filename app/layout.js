import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from '@/app/components/Nav'
import { getSearchIndex } from '@/lib/search'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matheus Sounier",
  description: "Backend developer",
};

export default function RootLayout({ children }) {
  const searchIndex = getSearchIndex()

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950">
        <header className="sticky top-0 z-20 bg-zinc-950 border-b border-zinc-900">
          <div className="max-w-2xl mx-auto w-full px-6 py-5">
            <Nav searchIndex={searchIndex} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}