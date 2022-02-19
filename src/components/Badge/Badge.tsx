import React from 'react'
import classes from './Badge.module.scss'

type BadgePropsBase = {
  children: React.ReactNode
  className?: string
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'red'
    | 'green'
    | 'dark'
    | 'light'
    | string
  max?: number
  showZero?: boolean
  size?: 'small' | 'medium' | 'large' | number
  variant?: 'default' | 'dot' | string
} & React.ComponentPropsWithoutRef<'span'>
type BadgePropsContent = BadgePropsBase & {
  content: string | number | null | React.ReactElement
}
type BadgePropsDot = BadgePropsBase & {
  content?: string | number | null | React.ReactElement
  variant: 'dot'
}

export type BadgeProps = BadgePropsContent | BadgePropsDot

function Badge(props: BadgeProps) {
  const {
    children,
    className,
    color = 'default',
    content,
    max,
    showZero = false,
    size = 'medium',
    variant = 'default',
    ...rest
  } = props

  const classNames = [
    classes.content,
    classes[`variant-${variant}`],
    classes[`color-${color}`],
    classes[`size-${size}`],
    className && className,
  ]

  let contentOutput = content
  if (typeof content === 'number' && max && max < content) {
    contentOutput = `${max}+`
  }

  if (content === 0 && !showZero) {
    classNames.push('visually-hidden')
  }

  if (React.isValidElement(content)) {
    classNames.push(classes.componentAsBadge)
  }

  return (
    <span className={classes.container}>
      {children}
      <span className={classNames.join(' ')} {...rest}>
        {contentOutput}
      </span>
    </span>
  )
}

export default Badge
