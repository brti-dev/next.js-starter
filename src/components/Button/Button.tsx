import { forwardRef } from 'react'
import Link from 'next/link'

import { Color, Variant } from 'interfaces/theme'
import classnames from 'lib/classnames'

type Percent = `${number}%`

export type ButtonProps = {
  type?: 'button' | 'reset' | 'submit'
  variant?: Variant | 'link' | 'close'
  color?: Color
  size?: 'small' | 'medium' | 'large'
  width?: number | Percent
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
    variant = 'default',
    color = 'default',
    size = 'medium',
    width,
    className,
    to,
    disabled = false,
    loading = false,
    icon = false,
    children,
    ...rest
  } = props

  const style: React.CSSProperties = {}
  if (typeof width === 'number') {
    style.width = `${width}px`
  } else if (typeof width === 'string') {
    // Percent
    style.width = width
  }

  const classNameString = classnames(
    'button', // Give access to global button style shared with other inputs
    `variant--${variant}`,
    `color--${color}`,
    `size--${size}`,
    icon && 'button__icon',
    className
  )

  if (to) {
    return (
      <Link href={to}>
        <a className={classNameString} {...rest}>
          <span className="text-content">{children}</span>
        </a>
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classNameString}
      disabled={disabled || loading ? true : undefined}
      data-loading={loading ? 'true' : undefined}
      style={style}
      ref={ref}
      {...rest}
    >
      <span className={`${icon ? 'icon' : 'text'}-content`}>{children}</span>
    </button>
  )
})

export default Button
