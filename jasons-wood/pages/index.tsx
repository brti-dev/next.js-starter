import Head from 'next/head'

import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jason's Wood</title>
        <meta
          name="description"
          content="Jason's wood products -- specializing in cutting boards"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Better than bad, it's good.</p>
      </main>
    </Layout>
  )
}
