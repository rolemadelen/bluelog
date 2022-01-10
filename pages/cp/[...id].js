import Layout from '/components/layout'
import { getAllPostIds, getPostData } from '/lib/codes'
import Codeblock from '/lib/codeblock.js'
import ReactMarkdown from 'react-markdown'

export default function Code({ postData }) {
    return (
        <Layout code>
            <title>{`${postData.from}-${postData.level}`}</title>
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