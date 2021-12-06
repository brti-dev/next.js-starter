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

export default function Code({ componentType, children, ...props }: CodeType) {
  if (!children) {
    return (
      <code>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  if (componentType) {
    return (
      <code>
        &lt;{componentType}
        {mapProps(props)}&gt;
        {children}&lt;/{componentType}&gt;
      </code>
    )
  }

  return <code>{children}</code>
}
