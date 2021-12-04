import React from 'react'
import Link from 'next/link'

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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
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

    const classNames = [
      'button',
      `variant-${variant}`,
      `color-${color}`,
      `size-${size}`,
      icon && 'icon',
      className && className,
    ]

    if (to) {
      return (
        <Link href={to}>
          <a className={classNames.join(' ')} {...rest}>
            {children}
          </a>
        </Link>
      )
    }

    return (
      <button
        type={type}
        className={classNames.join(' ')}
        disabled={disabled || loading ? true : undefined}
        data-loading={loading ? true : undefined}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

export default Button
