import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
              
            </section>
        </Layout>
    )
}