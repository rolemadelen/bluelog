import PostList from '@components/PostList'
import Container from '@components/Container'
import Footer from '@components/Footer'
import { generateRSSFeed } from '@lib/generateRSSFeed'
import { getAllPosts } from '@lib/blog'
import metadata from '@data/metadata'
import tw from "tailwind-styled-components"

export default function Blog({ posts }) {
    const customMeta = {
        title: `${metadata.title} - Blog`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <PostListContainer>
                <PostList posts={posts} />
            </PostListContainer>
            <Footer />
        </Container>
    )
}

const PostListContainer = tw.ul` 
    list-none
    p-0
    m-0
`

export async function getStaticProps() {
    const posts = getAllPosts()
    generateRSSFeed(posts);
    return {
        props: {
            posts
        }
    }
}