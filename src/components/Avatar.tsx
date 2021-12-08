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

  const avatarOutput = (
    <div
      className={classNames.join(' ')}
      style={{ width: size, height: size }}
      ref={ref}
      {...rest}
    >
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  )

  return tooltipLabel ? (
    <Tooltip label={tooltipLabel}>{avatarOutput}</Tooltip>
  ) : (
    <>{avatarOutput}</>
  )
})

export type AvatarGroupProps = {
  max?: number
  total?: number
  children: React.ReactElement[]
}

export const AvatarGroup = ({ max, total, children }: AvatarGroupProps) => {
  const numChildren = React.Children.count(children)
  if (numChildren > max || numChildren < total) {
    const excess = max ? numChildren - max : total - numChildren
    const mapToIndex = max ?? numChildren
    const childrenArray = React.Children.toArray(children)
    const childrenOutput = childrenArray
      .map((child, i) => {
        if (i < mapToIndex) {
          return child
        } else {
          return null
        }
      })
      .filter(child => !!child)
      .reverse()
    childrenOutput.unshift(
      <Avatar className={classes.excess}>{`+${excess}`}</Avatar>
    )

    const classNames = [classes.group, classes.groupMax]

    return <div className={classNames.join(' ')}>{childrenOutput}</div>
  }

  return (
    <div className={classes.group}>
      {React.Children.toArray(children).reverse()}
    </div>
  )
}

export default Avatar
