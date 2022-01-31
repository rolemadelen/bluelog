import Container from '@components/Container'
import PostList from '@components/PostList'
import Footer from '@components/Footer'
import { getAllPosts } from '@lib/blog'
import metadata from '@data/metadata'
import { PostListContainer } from '@components/custom-tw-components'
import tw from 'tailwind-styled-components'

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

export async function getStaticProps() {
    const posts = getAllPosts().filter(post => post.lang === "en")
    return {
        props: {
            posts
        }
    }
}
