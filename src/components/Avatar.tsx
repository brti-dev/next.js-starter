import React from 'react'

import Tooltip from 'components/Tooltip'
import classes from 'styles/components/avatar.module.scss'

export type AvatarProps = {
  alt?: string
  children?: React.ReactNode
  className?: string
  color?: 'default' | 'primary' | 'secondary' | 'red' | 'green'
  size?: number
  src?: string
  tooltip?: string | boolean
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    alt,
    children,
    className,
    color = 'default',
    size = 40,
    src,
    tooltip,
    ...rest
  } = props

  const classNames = [
    classes.avatar,
    classes[`color-${color}`],
    className && className,
  ]

  let tooltipLabel: string
  if (!!tooltip) {
    if (tooltip === true && alt) {
      tooltipLabel = alt
    } else if (typeof tooltip === 'string') {
      tooltipLabel = tooltip as string
    }
  }

  return (
    <Tooltip label={tooltipLabel}>
      <div
        className={classNames.join(' ')}
        style={{ width: size, height: size }}
        ref={ref}
        {...rest}
      >
        {src ? <img src={src} alt={alt} /> : children}
      </div>
    </Tooltip>
  )
})

export type AvatarGroupProps = {
  max?: number
  children: React.ReactElement[]
}

export const AvatarGroup = ({ max, children }: AvatarGroupProps) => {
  const numChildren = React.Children.count(children)
  if (numChildren > max) {
    const excess = numChildren - max
    const childrenArray = React.Children.toArray(children)
    const childrenOutput = childrenArray
      .map((child, i) => {
        if (i < max) {
          return child
        } else if (i === max) {
          return <Avatar>{`+${excess}`}</Avatar>
        } else {
          return <></>
        }
      })
      .reverse()

    return <div className={classes.group}>{childrenOutput}</div>
  }

  return <div className={classes.group}>{children}</div>
}

export default Avatar
