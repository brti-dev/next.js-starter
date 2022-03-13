import { useState } from 'react'

import { Color } from 'interfaces/theme'
import Layout from 'components/Layout'
import Button, { IconButton } from 'components/Button'
import { BiBell as BellIcon } from 'react-icons/bi'
import Code, { CodeBlock } from 'components/Code'

const COLORS = [
  'primary',
  'secondary',
  'error',
  'warning',
  'success',
  'info',
  'light',
  'dark',
]

const flex: React.CSSProperties = {
  display: 'flex',
  gap: '1em',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
}

export default function ButtonComponent() {
  const [loading, setLoading] = useState(false)

  const toggleLoading = () => {
    if (!loading) {
      setTimeout(() => setLoading(false), 2000)
    }

    setLoading(!loading)
  }

  return (
    <Layout>
      <h1>Button</h1>
      <p>Buttons trigger actions when clicked.</p>
      <h2>Style Variants</h2>
      <div style={flex}>
        <Button>Default</Button> <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </div>
      <CodeBlock>
        <Code>{`<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>`}</Code>
      </CodeBlock>

      <h2>Colors</h2>
      <div style={flex}>
        {COLORS.map((color: Color) => (
          <Button key={color} variant="contained" color={color}>
            {color[0].toUpperCase() + color.substring(1)}
          </Button>
        ))}
      </div>
      <CodeBlock>
        <Code>
          {COLORS.map(
            (color: Color) =>
              `<Button variant="contained" color="${color}">${
                color[0].toUpperCase() + color.substring(1)
              }</Button>`
          ).join('\n')}
        </Code>
      </CodeBlock>

      <h2>Loading Button</h2>
      <p>
        <Code>{'loading={boolean}'}</Code>
      </p>
      <div style={flex}>
        <Button loading={loading} onClick={() => toggleLoading()}>
          {loading ? 'Loading' : 'Click Me'}
        </Button>
        <Button loading>Loading</Button>
        <Button variant="contained" color="primary" loading>
          Loading
        </Button>
      </div>

      <h2>Anchor Button</h2>
      <p>
        <Code>{'to={string}'}</Code>
      </p>
      <p>Create a button-like link.</p>
      <Button to="/">Home</Button>
      <CodeBlock>
        <Code componentType="Button" to="/">
          Home
        </Code>
      </CodeBlock>

      <h2>Icon Button</h2>
      <div style={flex}>
        <IconButton>
          <BellIcon />
        </IconButton>
        <IconButton variant="outlined">
          <BellIcon />
        </IconButton>
        <IconButton variant="contained">
          <BellIcon />
        </IconButton>
      </div>
      <CodeBlock>
        <Code>{`<IconButton>
  <BellIcon />
</IconButton>
<IconButton variant="outlined">
  <BellIcon />
</IconButton>
<IconButton variant="contained">
  <BellIcon />
</IconButton>`}</Code>
      </CodeBlock>

      <h2>Other Props</h2>

      <h3>
        <code>width</code>
      </h3>
      <p>
        <code>{`width={number | percent}`}</code>
      </p>
      <Button width="50%" variant="contained" color="primary">
        Minim eu exercitation pariatur cillum eiusmod occaecat enim proident
        ipsum.
      </Button>

      <h3>
        <code>size</code>
      </h3>
      <p>
        <code>{`size={"small" | "medium" | "large"}`}</code>
      </p>
      <div style={flex}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained">Medium</Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    </Layout>
  )
}
