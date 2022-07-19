import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Resee</title>
      </Head>
      <body className={"overflow-y-scroll"}>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
