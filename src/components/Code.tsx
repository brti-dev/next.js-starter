const mapProps = (props): string => {
  if (!props) return ''
  let propString = ''
  for (const [key, value] of Object.entries(props)) {
    if (value === true) {
      propString += ` ${key}`
    } else if (typeof value === 'number') {
      propString += ` ${key}={${value}}`
    } else {
      propString += ` ${key}="${value}"`
    }
  }

  return propString
}

type CodeType = {
  componentType?: string
  children?: React.ReactElement | React.ReactElement[] | string
} & any

export default function Code({
  componentType = null,
  children = null,
  ...props
}: CodeType) {
  if (!children) {
    return (
      <code>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  if (typeof children === 'string') {
    return <code>{children}</code>
  }

  return (
    <code>
      &lt;{componentType}
      {mapProps(props)}&gt;
      {children}&lt;/{componentType}&gt;
    </code>
  )
}
