/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

import { SITE_TITLE } from '../src/components/Layout'
import useMediaQuery from '../src/lib/use-media-query'

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

jest.mock('../src/lib/use-media-query', () => {
  return {
    __esModule: true,
    default: jest.fn(() => true),
  }
})

test('mock use-media-query', () => {
  const mq = useMediaQuery('(max-width: 680px)')
  expect(mq).toBe(true)
})

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: SITE_TITLE,
    })

    expect(heading).toBeInTheDocument()
  })
})
