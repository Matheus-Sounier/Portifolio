import React from 'react'
import { render, screen } from '@testing-library/react'
import { Nav } from '../app/components/Nav'

describe('Nav component', () => {
  it('renders links and ThemeToggle', () => {
    render(<Nav searchIndex={[]} />)
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument()
  })
})
