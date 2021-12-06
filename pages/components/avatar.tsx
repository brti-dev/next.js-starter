import Layout from 'components/Layout'
import Avatar, { AvatarGroup } from 'components/Avatar'
import Code from 'components/Code'

export default function AvatarComponent() {
  return (
    <Layout>
      <h1>Avatar</h1>
      <p>Graphic representative of users.</p>
      <h2>Image Avatar</h2>
      <Avatar
        src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
        alt="Mr Banana Grabber"
      >
        MBG
      </Avatar>
      <p>
        <Code
          componentType="Avatar"
          src="/img/avatar.png"
          alt="Mr Banana Grabber"
        >
          MBG
        </Code>
      </p>

      <h2>Monogram Avatar</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Avatar>A</Avatar> <Avatar color="primary">BC</Avatar>{' '}
        <Avatar color="secondary">DEF</Avatar> <Avatar color="green">G</Avatar>{' '}
        <Avatar color="red">R</Avatar>
      </div>
      <p>
        <Code componentType="Avatar">A</Code>
        <br />
        <Code componentType="Avatar" color="primary">
          BC
        </Code>
        <br />
        <Code componentType="Avatar" color="secondary">
          DEF
        </Code>
        <br />
        <Code componentType="Avatar" color="green">
          G
        </Code>
        <br />
        <Code componentType="Avatar" color="red">
          R
        </Code>
      </p>

      <h2>Sizes</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
          size={20}
        />
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
        />
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
          size={60}
        />
      </div>
      <p>
        <Code
          componentType="Avatar"
          src="/img/avatar.png"
          alt="Mr Banana Grabber"
          size={20}
        />
        <br />
        <Code
          componentType="Avatar"
          src="/img/avatar.png"
          alt="Mr Banana Grabber"
        />
        <br />
        <Code
          componentType="Avatar"
          src="/img/avatar.png"
          alt="Mr Banana Grabber"
          size={60}
        />
      </p>

      <h2>Avatar Group</h2>
      <p>Group together multiple avatars.</p>
      <AvatarGroup max={3}>
        <Avatar>🧑</Avatar>
        <Avatar>👨‍🦰</Avatar>
        <Avatar>👩‍🦰</Avatar>
        <Avatar>👱‍♀️</Avatar>
        <Avatar>👴</Avatar>
      </AvatarGroup>
      <p>
        <Code>
          {`<AvatarGroup max={3}>
  <Avatar>🧑</Avatar>
  <Avatar>👨‍🦰</Avatar>
  <Avatar>👩‍🦰</Avatar>
  <Avatar>👱‍♀️</Avatar>
  <Avatar>👴</Avatar>
</AvatarGroup>`}
        </Code>
      </p>

      <h2>Tooltip</h2>
      <p>
        The <code>tooltip</code> prop takes a string or boolean value. If
        boolean, the <code>alt</code> prop is used as the tooltip label.
      </p>
      <Avatar tooltip alt="foo">
        ✨
      </Avatar>
    </Layout>
  )
}
