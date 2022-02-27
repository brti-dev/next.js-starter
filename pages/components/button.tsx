import Layout from 'components/Layout'
import Button, { IconButton } from 'components/Button'
import { BiBell as BellIcon } from 'react-icons/bi'
import Code, { CodeBlock } from 'components/Code'

export default function ButtonComponent() {
  return (
    <Layout>
      <h1>Button</h1>
      <p>Buttons trigger actions when clicked.</p>
      <h2>Style Variants</h2>
      <Button>Default</Button> <Button variant="outlined">Outlined</Button>{' '}
      <Button variant="contained">Contained</Button>{' '}
      <CodeBlock>
        <Code>{`<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>`}</Code>
      </CodeBlock>
      <h2>Colors</h2>
      <Button variant="contained" color="primary">
        Primary
      </Button>{' '}
      <Button variant="contained" color="secondary">
        Secondary
      </Button>{' '}
      <Button variant="contained" color="red">
        Red
      </Button>{' '}
      <Button variant="contained" color="green">
        Green
      </Button>
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
      <Button loading>Loading</Button>{' '}
      <Button variant="contained" color="primary" loading>
        Loading
      </Button>
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
      <div style={{ display: 'flex', gap: '0.5em' }}>
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
