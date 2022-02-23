/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        return (
            <Html id="vantabg" lang="en" className={"dark:bg-dtheme_surface duration-300"} style={{ scrollBehavior: 'smooth' }}>
                <Head>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></script>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                </Head>

                <body className={"bg-theme dark:bg-dtheme_surface duration-300"}>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}

export default MyDocument