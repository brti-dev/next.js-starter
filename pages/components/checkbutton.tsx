import Layout from 'components/Layout'
import CheckButton, { checkButtonContainerClass } from 'components/CheckButton'
import Code from 'components/Code'

export default function CheckButtonComponent() {
  return (
    <Layout>
      <h1>CheckButton</h1>
      <p>A button-like alternative to a checkbox</p>
      <h2>Example</h2>
      <div className={checkButtonContainerClass}>
        <CheckButton name="gender" value="male">
          👨 I'm a daddy
        </CheckButton>
        <CheckButton name="has_boat" value="yes" checked={true}>
          🛥️ I have a boat
        </CheckButton>
      </div>
      <p>
        <pre>
          <code>
            import CheckButton, &#123;checkButtonContainerClass&#125; from
            'components/CheckButton'
            <br />
            <br />
            &lt;div className=&#123;checkButtonContainerClass&#125;&gt;
            <br />
            &nbsp;&nbsp;
            <Code componentType="CheckButton" name="gender" value="male">
              👨 I'm a daddy
            </Code>
            <br />
            &nbsp;&nbsp;
            <Code
              componentType="CheckButton"
              name="has_boat"
              value="yes"
              checked={true}
            >
              🛥️ I have a boat
            </Code>
            <br />
            &lt;div&gt;
          </code>
        </pre>
      </p>
    </Layout>
  )
}
