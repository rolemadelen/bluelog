import ReactMarkdown from 'react-markdown'
import { getAllPostIds, getPostData } from '@lib/cp'
import CPLayout from '@layouts/cp'

export default function Code({ post }) {
    return (
        <CPLayout post={post}/>
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
    const post = await getPostData(params.id)
    return {
        props: {
            post
        }
    }
}