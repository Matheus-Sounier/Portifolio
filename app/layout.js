import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from '@/app/components/Nav'
import { ThemeScript } from '@/app/components/ThemeScript'
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-150">
        <header className="sticky top-0 z-20 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-150">
          <div className="max-w-3xl mx-auto w-full px-6 py-5">
            <Nav searchIndex={searchIndex} />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}