import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <footer className="flex justify-center items-center mb-5 text-sm text-secondary"> 2022©<a href="https://github.com/euisblue">Blue Eu</a>. powered by&nbsp;<a href="https://vercel.com/">Vercel</a></footer>
      </Html>
    )
  }
}

export default MyDocument