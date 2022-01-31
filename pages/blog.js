import { generateRSSFeed } from '@lib/generateRSSFeed'
import { getAllPosts } from '@lib/blog'
import BlogLayout from '@layouts/blog'

export default function Blog({ posts }) {
    return (
        <BlogLayout posts={posts} />
    )
}

export async function getStaticProps() {
    const posts = getAllPosts()
    generateRSSFeed(posts);
    return {
        props: {
            posts
        }
    }
}