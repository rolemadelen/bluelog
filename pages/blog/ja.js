import Container from '@components/Container'
import PostList from '@components/PostList'
import Footer from '@components/Footer'
import { getAllPosts } from '@lib/blog'
import metadata from '@data/metadata'
import tw from "tailwind-styled-components"

export default function Blog({ posts }) {
    const customMeta = {
        title: `${metadata.title} - ブログ`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <PostListContainer>
                <PostList posts={posts}/>
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
    const posts = getAllPosts().filter(post => post.lang === "ja")
    return {
        props: {
            posts
        }
    }
}