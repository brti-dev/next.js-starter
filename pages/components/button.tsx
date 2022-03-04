import { useState } from 'react'
import Layout from 'components/Layout'
import Button, { IconButton } from 'components/Button'
import { BiBell as BellIcon } from 'react-icons/bi'
import Code, { CodeBlock } from 'components/Code'

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
      <div style={{ display: 'flex', gap: '1em' }}>
        <Button>Default</Button> <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </div>
      <CodeBlock>
        <Code>{`<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>`}</Code>
      </CodeBlock>
      <h2>Colors</h2>
      <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="red">
          Red
        </Button>
        <Button variant="contained" color="green">
          Green
        </Button>
      </div>
      <CodeBlock>
        <Code>{`<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" color="red">
  Red
</Button>
<Button variant="contained" color="green">
  Green
</Button>`}</Code>
      </CodeBlock>

      <h2>Loading Button</h2>
      <p>
        <Code>{'loading={boolean}'}</Code>
      </p>
      <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
        <Button loading={loading} onClick={() => toggleLoading()}>
          {loading ? 'Loading' : 'Click Me'}
        </Button>
        <Button loading>Loading</Button>
        <Button variant="contained" color="primary" loading>
          Loading
        </Button>
      </div>
      <CodeBlock>
        <Code componentType="Button" loading>
          Loading
        </Code>
      </CodeBlock>
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
      <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap' }}>
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
    </Layout>
  )
}
