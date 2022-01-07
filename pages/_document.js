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
                <footer className="flex flex-col justify-center items-center mb-8 text-sm text-secondary">
                    <div>
                        2022©<a href="https://github.com/euisblue">Blue Eu</a>. powered by&nbsp;<a href="https://vercel.com/">Vercel</a>
                    </div>
                    <div className="snsLinks flex items-center justify-center">
                    <a href="https://github.com/euisblue/bluelog">
                        <img src="/images/social/github.svg" width="20" height="20" />
                    </a>
                    <a href="https://twitter.com/euisblue">
                        <img src="/images/social/twitter.svg" width="20" height="20" />
                    </a>
                    </div>
                </footer>
            </Html>
        )
    }
}

export default MyDocument