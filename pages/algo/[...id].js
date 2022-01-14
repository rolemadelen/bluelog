import ReactMarkdown from 'react-markdown'
import Comments from '@components/Comments'
import Container from '@components/Container'
import Codeblock from '@lib/codeblock.js'
import { getAllPostIds, getPostData } from '@lib/template'

export default function Algo({ post }) {
    const customMeta = {
        title: `Bluelog - ${post.title}`,
    }
    return (
        <Container customMeta={customMeta}>
            <h1 className={`text-primary dark:text-dark_primary text-xl font-semibold mb-5`}>{post.title}</h1>
            <article className={`text-primary dark:text-dark_primary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds("algo")
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostData("algo", params.id)
    return {
        props: {
            post
        }
    }
}