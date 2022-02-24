import { getAllPosts } from '@lib/doc'
import Container from '@components/Container'
import CPSection from '@components/CPSection'
import metadata from '@data/metadata'
import Footer from '@components/Footer'

export default function Code({ posts }) {
    const baekjoonPosts = posts.filter(post => { return post.dir == 'Baekjoon' })
    const leetcodePosts = posts.filter(post => { return post.dir == 'Leetcode' })
    const programmersPosts = posts.filter(post => { return post.dir == 'Programmers' })
    const customMeta = {
        title: `${metadata.title} - CP`
    }

    return (
        <Container customMeta={customMeta}>
            <CPSection posts={leetcodePosts ? leetcodePosts : []} value={"Leetcode"} />
            <CPSection posts={programmersPosts ? programmersPosts : []} value={"Programmers"} />
            <CPSection posts={baekjoonPosts ? baekjoonPosts : []} value={"Baekjoon OJ"} />
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts("cp")
    return {
        props: {
            posts
        }
    }
}