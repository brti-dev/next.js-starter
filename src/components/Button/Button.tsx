import { forwardRef } from 'react'
import Link from 'next/link'

import classes from './Button.module.scss'

export type ButtonProps = {
  type?: 'button' | 'reset' | 'submit'
  variant?: 'text' | 'contained' | 'outlined' | 'link' | 'close'
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'red'
    | 'green'
    | 'dark'
    | 'light'
  size?: 'small' | 'medium' | 'large'
  className?: string
  to?: string
  disabled?: boolean
  loading?: boolean
  icon?: boolean
  children: React.ReactNode
} & React.ComponentPropsWithRef<'button'> &
  React.ComponentPropsWithRef<'a'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    variant = 'text',
    color = 'default',
    size = 'medium',
    className,
    to,
    disabled = false,
    loading = false,
    icon = false,
    children,
    ...rest
  } = props

  const classNameString = [
    'button', // Give access to global button style shared with other inputs
    classes.button,
    classes[variant],
    `color-${color}`, // Only a subset of variant 'contained'
    classes[size],
    icon ? classes.icon : undefined,
    className ?? undefined,
  ]
    .filter(cn => !!cn)
    .join(' ')

  if (to) {
    return (
      <Link href={to}>
        <a className={classNameString} {...rest}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classNameString}
      disabled={disabled || loading ? true : undefined}
      data-loading={loading ? true : undefined}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
})

export default Button
