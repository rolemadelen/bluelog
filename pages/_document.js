import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html id="vantabg" lang="en" className={"dark:bg-dtheme_surface duration-300 mt-3"}>
                <Head>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
                </Head>

                <body className={"bg-theme dark:bg-dtheme_surface duration-300"}>
                    <Main />
                    <NextScript />
                </body>
                <footer className="flex flex-col justify-center items-center mb-8 text-sm text-primary dark:text-dsecondary">
                    <div>
                        © 2022 <a href="https://github.com/euisblue">Blue Eu</a>. powered by&nbsp;<a href="https://vercel.com/">Vercel</a>
                    </div>
                    <div className="snsLinks flex items-center justify-center">
                        <a href="https://github.com/euisblue/bluelog">
                            <img src="/images/social/github.svg" width="20" height="20" />
                        </a>
                        <a href="https://twitter.com/euisblue">
                            <img src="/images/social/twitter.svg" width="20" height="20" />
                        </a>
                        <a href="https://euisblue.me/rss.xml">
                            <img src="/images/social/rss.svg" width="20" height="20" />
                        </a>
                    </div>
                </footer>
            </Html>
        )
    }
}

export default MyDocument