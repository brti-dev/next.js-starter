import Layout from 'components/Layout'
import Avatar, { AvatarGroup } from 'components/Avatar'
import Code from 'components/Code'
import Badge from 'components/Badge'

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
        <Avatar alt="Regular unstyled avatar">A</Avatar>{' '}
        <Avatar color="primary" alt="Primary color avatar">
          BC
        </Avatar>{' '}
        <Avatar color="secondary" alt="Secondary color avatar">
          DEF
        </Avatar>{' '}
        <Avatar color="green" alt="Green avatar">
          G
        </Avatar>{' '}
        <Avatar color="red" alt="Red avatar">
          R
        </Avatar>
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
      <p>
        Input a number into the <code>size</code> prop to change the diameter of
        the avatar. The default value is <code>40</code>.
      </p>
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
        <Code componentType="Avatar" size={20} />
        <br />
        <Code componentType="Avatar" />
        <br />
        <Code componentType="Avatar" size={60} />
      </p>

      <h2>Avatar Group</h2>
      <p>Group together multiple avatars.</p>
      <AvatarGroup max={3}>
        <Avatar alt="head">🧑</Avatar>
        <Avatar alt="mustache head">👨‍🦰</Avatar>
        <Avatar alt="lady head">👩‍🦰</Avatar>
        <Avatar alt="girl head">👱‍♀️</Avatar>
        <Avatar alt="? head">👴</Avatar>
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

      <h3>Total avatars</h3>
      <p>
        Use the <code>total</code> prop to control the total number of avatars
      </p>
      <AvatarGroup total={13}>
        <Avatar alt="monkey">🙈</Avatar>
        <Avatar alt="monkey">🙉</Avatar>
        <Avatar alt="monkey">🙊</Avatar>
      </AvatarGroup>
      <p>
        <Code>{`<AvatarGroup total={13}>
  <Avatar>🙈</Avatar>
  <Avatar>🙉</Avatar>
  <Avatar>🙊</Avatar>
</AvatarGroup>`}</Code>
      </p>

      <h2>Tooltip</h2>
      <p>
        The <code>tooltip</code> prop takes a string or boolean value. If
        boolean, the <code>alt</code> prop is used as the tooltip label.
      </p>
      <Avatar tooltip alt="foo">
        ✨
      </Avatar>

      <h2>With badge</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Badge variant="dot" color="red">
          <Avatar color="primary" alt="avatar with badge">
            A
          </Avatar>
        </Badge>
        <Badge
          content={
            <Avatar size={20} alt="poo">
              💩
            </Avatar>
          }
        >
          <Avatar color="primary" alt="Avatar with poo badge">
            B
          </Avatar>
        </Badge>
      </div>
      <p>
        <Code>{`<Badge variant="dot" color="red">
  <Avatar>A</Avatar>
</Badge>
<Badge content={<Avatar size={20}>💩</Avatar>}>
  <Avatar>B</Avatar>
</Badge>`}</Code>
      </p>
    </Layout>
  )
}
