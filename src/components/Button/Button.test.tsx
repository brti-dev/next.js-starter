import '@testing-library/jest-dom'

import { render, screen } from '../../../test-utils'
import Button from './Button'

test('shows spinner & disabled if loading', () => {
  const { getByText } = render(<Button loading>Loading</Button>)

  const expBtn = expect(getByText('Loading'))
  expBtn.toHaveAttribute('data-loading')
  expBtn.toHaveAttribute('disabled')
})

test('has the proper aria attributes', () => {
  const { rerender } = render(<Button>button</Button>)

  // button has role="button"
  let button = screen.getByRole('button')
  expect(button).not.toHaveAttribute('aria-disabled')

  // loading sets aria-disabled to true
  rerender(<Button loading>button</Button>)
  button = screen.getByRole('button')
  expect(button).toHaveAttribute('disabled')
})

test('has the proper `type` attribute', () => {
  const { getByRole, rerender } = render(<Button>button</Button>)

  expect(getByRole('button')).toHaveAttribute('type', 'button')

  rerender(
    <Button data-testid="btn" type="submit">
      button
    </Button>
  )

  expect(getByRole('button')).toHaveAttribute('type', 'submit')

  rerender(
    <Button data-testid="btn" type="reset">
      button
    </Button>
  )

  expect(getByRole('button')).toHaveAttribute('type', 'reset')
})

test('should be disabled', () => {
  const { getByRole } = render(<Button disabled>button</Button>)
  expect(getByRole('button')).toHaveAttribute('disabled')
})
