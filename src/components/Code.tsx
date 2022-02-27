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
  language?: string
  children?: React.ReactNode
} & any

export function CodeBlock({ children }) {
  return (
    <pre
      style={{
        padding: '1em 5%',
        overflow: 'auto',
        background: 'var(--color-surface)',
        counterReset: 'linenumbers',
        lineHeight: 1,
      }}
    >
      {children}
    </pre>
  )
}

export default function Code({
  componentType,
  language = 'react',
  children,
  ...props
}: CodeType) {
  if (!children) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  if (componentType) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)}&gt;
        {children}&lt;/{componentType}&gt;
      </code>
    )
  }

  return <code>{children}</code>
}
