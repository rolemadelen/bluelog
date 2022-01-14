import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import { getAllPostIds, getPostData } from '@lib/template'
import Comments from '@components/comments'
import Container from '@components/Container'

export default function Code({ post }) {
    const customMeta = {
        title: `Bluelog - ${post.level}`,
    }
    return (
        <Container customMeta={customMeta}>
            <article className={`text-primary dark:text-dprimary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds("cp")
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostData("cp", params.id)
    return {
        props: {
            post
        }
    }
}