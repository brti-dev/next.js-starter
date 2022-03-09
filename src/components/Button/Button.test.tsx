import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import { render, screen } from '../../../test-utils'
import Button, { IconButton } from '.'

test('renders button unchanged', () => {
  const tree = renderer
    .create(
      <Button variant="contained" color="primary" size="small" width={50}>
        Button
      </Button>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders icon button unchanged', () => {
  const tree = renderer.create(<IconButton>icon</IconButton>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('shows spinner & disabled if loading', () => {
  const { getByRole } = render(<Button loading>Loading</Button>)

  const expBtn = expect(getByRole('button'))
  expBtn.toHaveAttribute('data-loading')
  expBtn.toBeDisabled()
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

test('should resize given `width` prop', () => {
  const { getByRole, rerender } = render(<Button width={100}>button</Button>)
  expect(getByRole('button')).toHaveStyle({ width: '100px' })

  rerender(<Button width={'50%'}>button</Button>)
  expect(getByRole('button')).toHaveStyle({ width: '50%' })
})
