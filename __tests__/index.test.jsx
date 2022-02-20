/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

import * as config from '../app.config'
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
      name: config.siteTitle,
    })

    expect(heading).toBeInTheDocument()
  })
})
