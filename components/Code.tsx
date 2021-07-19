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

export default function Code({ componentType, children = null, ...props }) {
  if (!children) {
    return (
      <code>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  return (
    <code>
      &lt;{componentType}
      {mapProps(props)}&gt;
      {children}&lt;/{componentType}&gt;
    </code>
  )
}
