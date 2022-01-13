import { getAllPostIds, getPostData } from '/lib/template'
import Codeblock from '/lib/codeblock.js'
import ReactMarkdown from 'react-markdown'
import Comments from '/components/comments'
import Container from '../../components/Container'

export default function Algo({ postData }) {
    return (
        <Container>
            <title>{postData.title}</title>
            <h1 className={`text-primary dark:text-dark_primary text-xl font-semibold mb-5`}>{postData.title}</h1>
            <article className={`text-primary dark:text-dark_primary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{postData.markdown}</ReactMarkdown>
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
    const postData = await getPostData("algo", params.id)
    return {
        props: {
            postData
        }
    }
}