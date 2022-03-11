import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { Severity } from 'interfaces/theme'
import { reducer } from 'lib/use-alert'
import { render } from '../../../test-utils'
import Alert, { AlertDispatch } from 'components/Alert'
import Button from 'components/Button'
import { AlertHook } from '../../../pages/components/alert'

const SEVERITY = ['error', 'warning', 'info', 'success']

describe('useAlert hook', () => {
  const initialState: AlertDispatch = {
    label: 'foo',
    message: 'lorem',
    severity: 'info',
  }

  test('should set up reducer', () => {
    expect(reducer(null, initialState)).toEqual(initialState)
  })

  test('alert appears and disappears', () => {
    const { getByText, queryByText } = render(<AlertHook />)

    const alertBtn = getByText('Alert')
    const dismissBtn = getByText('Dismiss')
    const alert = queryByText(/something happened/i) // Query will return node OR null; It will never throw

    expect(alertBtn).toBeInTheDocument()
    expect(dismissBtn).toBeInTheDocument()
    expect(alert).toBeNull() // Because null indicates query returned empty

    userEvent.click(alertBtn)
    expect(alert).not.toBeNull()

    userEvent.click(dismissBtn)
    expect(alert).toBeNull()
  })
})

test('renders alert unchanged', () => {
  const tree = renderer
    .create(
      <Alert severity="error" action={<b>Action</b>}>
        Alert
      </Alert>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('has the proper `severity` attributes', () => {
  const severity = SEVERITY[0]
  const { getByRole, rerender } = render(
    <Alert severity={severity as Severity}>alert</Alert>
  )
  expect(getByRole('alert')).toHaveAttribute('data-severity', severity)

  SEVERITY.slice(1).forEach((severity: Severity, index) => {
    rerender(<Alert severity={severity}>alert</Alert>)
    expect(getByRole('alert')).toHaveAttribute('data-severity', severity)
  })
})

test('should output a message using the `message` prop', () => {
  const { getByText } = render(<Alert message="WARNING!" />)
  expect(getByText('WARNING!')).toBeInTheDocument()
})

test('should output a message using the `children` prop', () => {
  const { getByText } = render(<Alert>WARNING!</Alert>)
  expect(getByText('WARNING!')).toBeInTheDocument()
})

test('should include a call to action with the `action` prop', () => {
  const { getByRole } = render(
    <Alert message="Alert" action={<Button>Act</Button>} />
  )
  expect(getByRole('button')).toBeInTheDocument()
})

test('should dismiss', () => {
  const { getByRole } = render(<Alert dismiss>Alert</Alert>)

  const btn = getByRole('button')
  expect(btn).toBeInTheDocument()
  userEvent.click(btn)
  expect(btn).not.toBeVisible()
})
