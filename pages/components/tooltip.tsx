import Code from 'components/Code'
import Layout from 'components/Layout'
import Tooltip from 'components/Tooltip'

export default function TooltipDoc() {
  return (
    <Layout title="Tooltip UI component">
      <h1>Tooltip</h1>
      <h2>Basic Tooltip</h2>
      <Tooltip label="Save">
        <button style={{ fontSize: 25 }}>💾</button>
      </Tooltip>
      <p>
        <Code>{`<Tooltip label="Save"><button>💾</button></Tooltip>`}</Code>
      </p>
    </Layout>
  )
}
