import { Divider, Date } from 'matterial-ui'

export default function Bar() {
  const date = '2000'

  return (
    <>
      <h1 style={{ color: 'var(--color-primary' }}>foo</h1>
      <Divider style={{ margin: '1em 0' }} />
      <Date date={date} />
    </>
  )
}
