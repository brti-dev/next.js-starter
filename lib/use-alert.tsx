import { useState, useCallback, createElement, useReducer } from 'react'
import Alert from '@reach/alert'
import {
  BiError as ErrorIcon,
  BiCheckCircle as SuccessIcon,
  BiInfoCircle as InfoIcon,
} from 'react-icons/bi'

type AlertDispatch = {
  message: string | null
  severity?: 'error' | 'success' | 'warning' | 'info'
}

function reducer(
  state: null | AlertDispatch,
  action: null | string | AlertDispatch
): null | AlertDispatch {
  if (typeof action === 'string') {
    return { message: action }
  }

  if (action == null) {
    return { message: null }
  }

  return { message: action.message, severity: action.severity }
}

/**
 * Hook to manage alert state.
 *
 * @param initialState Initial state; If true-ish, the alert will display immediately
 *
 * @returns {JSX.Element} Alert component to render
 * @returns {function} Function to set alert message
 */
function useAlert(
  initialState: null | string | AlertDispatch
): [React.ComponentType, any] {
  const [alert, setAlert] = useReducer(reducer, reducer(null, initialState))

  const component = useCallback(() => {
    const { message, severity } = alert
    const classNames = ['alert']
    if (severity) classNames.push(`alert--${severity}`)

    if (!message) return null

    return (
      <Alert hidden={!message} className={classNames.join(' ')}>
        {severity === 'error' && <ErrorIcon />}
        {severity === 'warning' && <ErrorIcon />}
        {severity === 'success' && <SuccessIcon />}
        {severity === 'info' && <InfoIcon />}
        {message && <span>{message}</span>}
      </Alert>
    )
  }, [alert])

  return [component, setAlert]
}

export default useAlert
