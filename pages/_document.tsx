import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
