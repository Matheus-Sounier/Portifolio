'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/app/components/ThemeToggle'

const LINKS = [
  { key: 'h', label: 'home', href: '/' },
  { key: 'a', label: 'articles', href: '/articles' },
  { key: 'w', label: 'works', href: '/works' },
  { key: 'p', label: 'projects', href: '/projects' },
  { key: 'r', label: 'resume', href: '/resume.pdf', external: true },
]

const TYPE_LABELS = {
  article: 'articles',
  work: 'work',
  project: 'projects',
}

export function Nav({ searchIndex = [] }) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [navHeight, setNavHeight] = useState(0)
  const inputRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(e) {
      if (open) {
        if (e.key === 'Escape') {
          setOpen(false)
          setQuery('')
        }
        return
      }

      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.key === '/') {
        e.preventDefault()
        setOpen(true)
        return
      }

      const link = LINKS.find((l) => l.key === e.key.toLowerCase())
      if (!link) return

      if (link.external) {
        window.open(link.href, '_blank', 'noopener,noreferrer')
      } else {
        router.push(link.href)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, router])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    setOpen(false)
    setQuery('')
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    function measure() {
      if (navRef.current) {
        setNavHeight(navRef.current.getBoundingClientRect().bottom)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  function close() {
    setOpen(false)
    setQuery('')
  }

  function goTo(result) {
    close()
    if (result.external) {
      window.open(result.href, '_blank', 'noopener,noreferrer')
    } else {
      router.push(result.href)
    }
  }

  const trimmed = query.trim().toLowerCase()
  const results = trimmed
    ? searchIndex.filter((item) => item.title.toLowerCase().includes(trimmed))
    : []

  function renderLink(link) {
    const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)

    if (link.external) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span className="text-red-500 dark:text-red-400">[{link.key}]</span> {link.label}
        </a>
      )
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={
          active
            ? 'text-zinc-900 dark:text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
        }
      >
        <span className="text-red-500 dark:text-red-400">[{link.key}]</span> {link.label}
      </Link>
    )
  }

  return (
    <>
      <nav ref={navRef} className="flex items-center gap-4 text-sm font-mono">
        <div className="hidden md:flex items-center gap-4">
          {LINKS.map(renderLink)}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setOpen(true)}
            className="text-rose-600 hover:text-rose-500 dark:text-rose-500 dark:hover:text-rose-400 transition-colors duration-150"
            aria-label="search"
          >
            /
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-150"
            aria-label="toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-900 text-sm font-mono">
          {LINKS.map(renderLink)}
        </div>
      )}

      {open && (
        <div
          className="fixed left-0 right-0 bottom-0 bg-white dark:bg-zinc-950 overflow-y-auto"
          style={{ top: navHeight }}
        >
          <div className="max-w-2xl mx-auto px-6 pt-10">
            <div className="flex items-center gap-2 border border-rose-200 dark:border-rose-900 rounded-lg px-4 py-3 focus-within:border-rose-500 transition-colors duration-150">
              <span className="text-rose-600 dark:text-rose-500 font-mono select-none">/</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search titles..."
                className="flex-1 bg-transparent outline-none font-mono text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              />
            </div>

            <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-900">
              {trimmed && results.length === 0 && (
                <p className="text-sm text-zinc-500 font-mono py-4">
                  no results for &quot;{query}&quot;
                </p>
              )}

              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => goTo(result)}
                  className="w-full flex items-center justify-between gap-4 py-3 text-left text-zinc-800 dark:text-zinc-200 hover:text-rose-500 dark:hover:text-rose-400 transition-colors duration-150"
                >
                  <span className="font-mono text-sm">{result.title}</span>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 shrink-0">
                    {TYPE_LABELS[result.type]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}