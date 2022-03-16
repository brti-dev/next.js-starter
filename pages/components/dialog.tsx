import { useState } from 'react'
import Button from 'components/Button'
import Dialog, { CloseButton } from 'components/Dialog'
import Layout from 'components/Layout'

export default function DialogComponent() {
  const [open, setOpen] = useState(false)

  const closeDialog = () => setOpen(false)

  return (
    <Layout title="Dialog component">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onDismiss={closeDialog}>
        <CloseButton onClick={closeDialog} />
        Culpa nostrud sint elit duis ad aute aliqua non cupidatat eiusmod
        consequat adipisicing.
      </Dialog>
    </Layout>
  )
}
