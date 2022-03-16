import Button from 'components/Button'
import Dialog, { CloseButton, useDialog } from 'components/Dialog'
import { DialogHook } from 'components/Dialog/dialog.example'
import Layout from 'components/Layout'

export default function DialogComponent() {
  return (
    <Layout title="Dialog component">
      <h2>Dialog Component</h2>
      <DialogHook />

      <h3>Dialog Props</h3>

      <h4>
        <code>{`active={boolean}`}</code>
      </h4>
      <p>Indicates if the dialog is open/shown</p>

      <h4>
        <code>{'closable={boolean}'}</code>
      </h4>
      <p>If true, add a CloseButton with onDismiss callback when clicked</p>

      <h4>
        <code>{`fullscreen={'auto'|boolean}`}</code>
      </h4>
      <p>
        Expand the modal to the edges of the viewport; 'auto' by default:
        fullscreen on mobile only
      </p>

      <h4>
        <code>{`onDismiss={() => void}`}</code>
      </h4>
      <p>
        Function called whenever the user hits "Escape" or clicks outside the
        dialog; Used to close the dialog or check if conditions are met before
        closing
      </p>
    </Layout>
  )
}
