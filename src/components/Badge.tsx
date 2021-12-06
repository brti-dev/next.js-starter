import classes from 'styles/components/badge.module.scss'

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
}
type BadgePropsContent = BadgePropsBase & {
  content: string | number | null
}
type BadgePropsDot = BadgePropsBase & {
  content?: string | number | null
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

  return (
    <span className={classes.container}>
      {children}
      <span className={classNames.join(' ')}>{contentOutput}</span>
    </span>
  )
}

export default Badge
