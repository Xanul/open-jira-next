// Created with the snippet "nextdocument"
// This file allow us to change configurations for the entire document like
// adding typographys or meta data

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Adding Roboto font and a link to the favicon */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> 
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument