import Head from 'next/head';

export default function Pagehead() {
  return (
    <Head>
      <title>
        no chirpz - A reminder to replace your smoke alarm batteries.
      </title>
      <meta name='viewport' content='width=device-width' />
      <meta
        name='description'
        content='Receive an annual email reminder to replace your batteries and test the alarm.'
      />

      <meta
        property='og:title'
        content='A reminder to replace your smoke alarm batteries.'
      />
      <meta
        property='og:description'
        content='Receive an annual email reminder to replace your batteries and test the alarm.'
      />
      <meta property='og:type' content='website' />
      <meta name='theme-color' content='#fff' />
      <link rel='icon' href='/favicon1.ico' />
    </Head>
  );
}
