'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : null
  )
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // schedule mounted update asynchronously to avoid synchronous setState
    const id = requestAnimationFrame(() => setMounted(true))

    function onStorage() {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    window.addEventListener('storage', onStorage)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  function toggle() {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="toggle theme"
      className="text-zinc-400 hover:text-rose-500 dark:text-zinc-400 dark:hover:text-rose-400 transition-colors duration-150"
    >
      {isDark === null || !mounted ? (
        <span className="block w-[18px] h-[18px]" />
      ) : isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}