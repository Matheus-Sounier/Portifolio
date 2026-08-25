import '@testing-library/jest-dom'

const nextNavigation = {
  useRouter: () => ({ push: () => {} }),
  usePathname: () => '/',
}

vi.mock('next/navigation', () => nextNavigation)
