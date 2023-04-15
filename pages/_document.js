import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <link rel="icon" href="/icon.svg" type="image/x-icon" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/icon.svg" />
        <link rel="icon" type="image/svg" sizes="16x16" href="/icon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
