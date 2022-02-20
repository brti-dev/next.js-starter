import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

test('shows spinner & disabled if loading', () => {
  const { getByTestId } = render(
    <Button data-testid="btn" loading>
      Loading
    </Button>
  )

  const expBtn = expect(getByTestId('btn'))
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
  const { getByTestId, rerender } = render(
    <Button data-testid="btn">button</Button>
  )

  expect(getByTestId('btn')).toHaveAttribute('type', 'button')

  rerender(
    <Button data-testid="btn" type="submit">
      button
    </Button>
  )

  expect(getByTestId('btn')).toHaveAttribute('type', 'submit')

  rerender(
    <Button data-testid="btn" type="reset">
      button
    </Button>
  )

  expect(getByTestId('btn')).toHaveAttribute('type', 'reset')
})

test('should be disabled', () => {
  const { getByRole } = render(<Button disabled>button</Button>)
  expect(getByRole('button')).toHaveAttribute('disabled')
})
