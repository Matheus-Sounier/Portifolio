'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-8 font-mono text-sm text-zinc-600 dark:text-zinc-300">
      <p className="mt-6">
        <span className="text-zinc-400 dark:text-zinc-500">visitor@portfolio:~</span>
        <span className="text-red-500 dark:text-red-400">$</span> curl https://matheussounier.vercel.app{pathname}
      </p>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        curl: (22) The requested URL returned error: 404
      </p>

      <div className="mt-6 space-y-1">
        <p className="text-zinc-900 dark:text-zinc-100 font-semibold">HTTP/1.1 404 Not Found</p>
        <p className="text-zinc-400 dark:text-zinc-500">The requested resource does not exist.</p>

        <div className="mt-4">
          <p>
            GET{' '}
            <span className="text-red-500 dark:text-red-400">
              {pathname}
            </span>
          </p>

          <p>
            Status:{' '}
            <span className="text-red-500 dark:text-red-400">
              404 Not Found
            </span>
          </p>
        </div>
      </div>

      <p className="mt-10">
        <span className="text-zinc-400 dark:text-zinc-500">visitor@portfolio:~</span>
        <span className="text-red-500 dark:text-red-400">$</span> ls
      </p>

      <div className="mt-2 space-y-1 text-zinc-500 dark:text-zinc-400">
        <p>/</p>
        <p>/articles</p>
        <p>/projects</p>
        <p>/works</p>
        <p>/resume.pdf</p>

      </div>

      <p className="mt-4 text-zinc-500 dark:text-zinc-400">
        <span className="text-zinc-400 dark:text-zinc-600"># huge hint:</span> try{' '}
        <Link href="/articles" className="text-red-500 dark:text-red-400 hover:underline">/articles</Link>,{' '}
        <Link href="/projects" className="text-red-500 dark:text-red-400 hover:underline">/projects</Link>{' '}
        or{' '}
        <Link href="/works" className="text-red-500 dark:text-red-400 hover:underline">/works</Link>
      </p>

      <p className="mt-8">
        <span className="text-zinc-400 dark:text-zinc-500">visitor@portfolio:~</span>
        <span className="text-red-500 dark:text-red-400">$</span> ls{' '}
        {pathname.replace(/^\/+/, '') || 'missing-page'}
      </p>

      <p className="mt-2 text-zinc-400 dark:text-zinc-500">
        ls: cannot access '{pathname.replace(/^\/+/, '') || 'missing-page'}': No such file or directory
      </p>

      <p className="mt-10">
        <span className="text-zinc-400 dark:text-zinc-500">visitor@portfolio:~</span>
        <span className="text-red-500 dark:text-red-400">$</span> cat what-to-do.txt
      </p>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Looks like this page doesn't exist.
      </p>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Try visiting one of the available directories showed above
      </p>

    </main>
  )
}