import { getAllPostIds, getPostData } from '@lib/blog'
import BlogPostLayout from '@layouts/blogpost'

export default function Post({ post }) {
    return (
        <BlogPostLayout post={post} />
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