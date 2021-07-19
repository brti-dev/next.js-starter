import React from 'react'

import classes from '@/styles/components/avatar.module.scss'

export type AvatarProps = {
  alt?: string
  children?: React.ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary' | 'red' | 'green'
  size?: number
  src?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    alt,
    children,
    className,
    color = 'default',
    size = 40,
    src,
    ...rest
  } = props

  const classNames = [
    classes.avatar,
    classes[`color-${color}`],
    className && className,
  ]

  return (
    <div
      className={classNames.join(' ')}
      style={{ width: size, height: size }}
      ref={ref}
      {...rest}
    >
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  )
})

export default Avatar
