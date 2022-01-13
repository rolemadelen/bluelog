import { getAllPostIds, getPostData } from '/lib/template'
import Codeblock from '/lib/codeblock.js'
import ReactMarkdown from 'react-markdown'
import Comments from '/components/comments'
import Container from '../../components/Container'

export default function Code({ postData }) {
    return (
        <Container>
            <title>{`${postData.from}-${postData.level}`}</title>
            <article className={`text-primary dark:text-dark_primary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{postData.markdown}</ReactMarkdown>
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
    const postData = await getPostData("cp", params.id)
    return {
        props: {
            postData
        }
    }
}