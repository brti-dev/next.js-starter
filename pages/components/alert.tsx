import Layout from 'components/Layout'
import Code, { CodeBlock } from 'components/Code'
import useAlert from 'lib/use-alert'

export default function AvatarComponent() {
  const [AlertError] = useAlert({ message: 'Fuuuuuu', severity: 'error' })
  const [AlertSuccess] = useAlert({ message: 'Success', severity: 'success' })
  const [AlertInfo] = useAlert({
    message: 'For your information',
    severity: 'info',
  })
  const [AlertWarning] = useAlert({ message: 'Danger', severity: 'warning' })

  return (
    <Layout>
      <h1>Alert</h1>
      <p>A React Hook to access an alert state and component.</p>

      <h2>Usage</h2>
      <CodeBlock>
        <Code>{`function App() {
  const [AlertComponent, setAlert] = useAlert()

  return (
    <AlertComponent />
    <button onClick={() => setAlert('Something happened')}>Alert</button>
    <button onClick={() => setAlert({ message:'Danger!', severity: 'warning' })}>Danger</button>
  )
}`}</Code>
      </CodeBlock>

      <h2>Sample</h2>
      <AlertError />
      <AlertSuccess />
      <AlertInfo />
      <AlertWarning />
    </Layout>
  )
}
