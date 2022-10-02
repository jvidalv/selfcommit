import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const description =
  'Incrementa tu alcance como desarrollador y llega hasta la luna!'

class MyDocument extends Document {
  render() {
    return (
      <Html className="motion-safe:scroll-smooth">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            media="print"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
            />
          </noscript>
          <meta
            name="description"
            content="Incrementa tu alcance como desarrollador y llega hasta la luna!"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Selfcommit" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={description} />
          <meta
            property="og:image"
            content="https://selfcommit.dev/social.jpg"
          />
          <meta property="og:url" content="https://selfcommit.dev/" />
          <meta name="twitter:card" content="summary_large_image" />
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
