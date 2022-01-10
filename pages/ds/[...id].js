import Layout from '/components/layout'
import { getAllPostIds, getPostData } from '/lib/ds'
import Codeblock from '/lib/codeblock.js'
import ReactMarkdown from 'react-markdown'

export default function DS({ postData }) {
    return (
        <Layout ds>
            <title>{postData.title}</title>
            <h1 className={`text-primary dark:text-dark_primary text-xl font-semibold mb-5`}>{postData.title}</h1>
            <article className={`text-primary dark:text-dark_primary`}>
                <ReactMarkdown components={Codeblock}>{postData.markdown}</ReactMarkdown>
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}