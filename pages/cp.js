import { getSortedPostsData } from '@lib/template'
import Container from '@components/Container'
import CPSection from '@components/CPSection'
import metadata from '@data/metadata'

export default function Code({ posts }) {
    const baekjoonPosts = posts.filter(post => { return post.from == 'baekjoon' })
    const leetcodePosts = posts.filter(post => { return post.from == 'leetcode' })
    const programmersPosts = posts.filter(post => { return post.from == 'programmers' })
    const customMeta = {
        title: `${metadata.title} - CP`
    }

    return (
        <Container customMeta = {customMeta}>
            <>
                <CPSection posts={baekjoonPosts ? baekjoonPosts : []} link={"https://www.acmicpc.net/"} value={"Baekjoon OJ"} />
                <CPSection posts={programmersPosts ? programmersPosts : []} link={"https://programmers.co.kr/learn/challenges"} value={"프로그래머스"} />
                <CPSection posts={leetcodePosts ? leetcodePosts : []} link={"https://www.acmicpc.net/"} value={"Leetcode"} />
            </>
        </Container>
    )
}

export async function getStaticProps() {
    const posts = getSortedPostsData("cp")
    return {
        props: {
            posts
        }
    }
}