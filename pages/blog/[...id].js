import { getAllPostIds, getPostData } from '@lib/blog'
import BlogLayout from '@layouts/blog'

export default function Post({ post }) {
    return (
        <BlogLayout post={post} />
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