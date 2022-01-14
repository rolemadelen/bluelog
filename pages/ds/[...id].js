import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import { getAllPostIds, getPostData } from '@lib/template'
import Comments from '@components/comments'
import Container from '@components/Container'

export default function DS({ post }) {
    const customMeta = {
        title: `Bluelog - ${post.title}`,
    }
    return (
        <Container customMeta={customMeta}>
            <h1 className={`text-primary dark:text-dprimary text-xl font-semibold mb-5`}>{post.title}</h1>
            <article className={`text-primary dark:text-dprimary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds("ds")
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostData("ds", params.id)
    return {
        props: {
            post
        }
    }
}