import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='google-site-verification'
            content='CIvkus0lq2Y4Cq3fX0SD_ExCeDfeV7EXianwJMGqfh8'
            key='analytics'
          />
          <script
            type='text/javascript'
            id='hs-script-loader'
            async
            defer
            src='//js.hs-scripts.com/7882714.js'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
