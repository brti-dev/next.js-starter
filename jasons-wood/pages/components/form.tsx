import Layout from '@/components/Layout'
import { Form, FormGroup, TextInput } from '@/components/Form'
import Code from '@/components/Code'

export default function FormComponent() {
  return (
    <Layout>
      <h1>Form</h1>
      <Form onSubmit={() => console.log('Form submit')}>
        <FormGroup
          label="Name"
          input={<TextInput name="name" placeholder="Your name" />}
        />
      </Form>
      <p>
        <Code
          componentType="Form"
          src="/img/avatar.png"
          alt="Mr Banana Grabber"
        >
          <Code
            componentType="FormGroup"
            label="Name"
            input={<TextInput name="name" placeholder="Your name" />}
          />
        </Code>
      </p>
    </Layout>
  )
}
