import ReachAlert from '@reach/alert'
import {
  BiErrorCircle as ErrorIcon,
  BiError as WarningIcon,
  BiCheckCircle as SuccessIcon,
  BiInfoCircle as InfoIcon,
} from 'react-icons/bi'
import { Severity, Variant } from 'interfaces/theme'
import classnames from 'lib/classnames'
import React from 'react'

const ICONS = {
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
  info: <InfoIcon />,
}

export type AlertDispatch = {
  // A short message to show
  message: string | null
  // A button or other call to action
  action?: string | React.ReactElement
  // Prefix a short phrase like "Critical Error" or "Warning"
  label?: string
  severity?: Severity
  variant?: Variant
}

export type AlertProps = Partial<AlertDispatch> & {
  children?: React.ReactNode
  className?: string
}

/**
 * Regenerate a React element with the prop `size` small
 */
function shrink(component: string | React.ReactElement) {
  if (React.isValidElement(component)) {
    return React.cloneElement(component, { size: 'small' })
  }

  return component
}

function Alert({
  action,
  children,
  className,
  label,
  message: naturalMessage,
  severity,
  variant = 'outlined',
}: AlertProps) {
  const classNames = classnames(
    'alert',
    `variant--${variant}`,
    severity && `color--${severity}`,
    className
  )

  let message = children || naturalMessage

  return (
    <ReachAlert hidden={!message} className={classNames}>
      {severity && <Icon severity={severity} />}
      <div className="content">
        <div className="message">
          {label && <strong className="label">{label}: </strong>}
          {message}
        </div>
        {action && <div className="action">{shrink(action)}</div>}
      </div>
    </ReachAlert>
  )
}

const Icon = ({ severity }) =>
  ICONS[severity] && (
    <div className="icon" aria-hidden="true">
      {ICONS[severity]}
    </div>
  )

export default Alert
