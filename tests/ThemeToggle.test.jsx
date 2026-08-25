import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from '../app/components/ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('renders and toggles theme', async () => {
    render(<ThemeToggle />)

    const btn = screen.getByRole('button', { name: /toggle theme/i })
    expect(btn).toBeInTheDocument()

    await userEvent.click(btn)
    expect(localStorage.getItem('theme')).toMatch(/dark|light/)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
