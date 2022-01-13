import { getBlogPosts, getAlgoPosts, getDSPosts } from '../lib/home'
import Container from '../components/Container'
import RecentPostsContainer from '../components/RecentPostsContainer'
import tw from 'tailwind-styled-components'

const Header = tw.h1`
    text-2xl
    text-primary
    dark:text-dark_primary
    mb-2
`

export default function Home({ blogPosts, algoPosts, dsPosts }) {
    return (
        <Container>
            <>
                <Header>Recent Posts</Header>
                <RecentPostsContainer value={"Blog"} link={"/blog"} posts={blogPosts ? blogPosts : []}/>
                <RecentPostsContainer value={"Data Structure"} link={"/ds"} posts={dsPosts ? dsPosts : []}/>
                <RecentPostsContainer value={"Algorithm"} link={"/algo"} posts={algoPosts ? algoPosts : []}/>
            </>
        </Container>
    )
}

export async function getStaticProps() {
    const blogPosts = getBlogPosts()
    const algoPosts = getAlgoPosts()
    const dsPosts = getDSPosts()
    return {
        props: {
            blogPosts,
            algoPosts,
            dsPosts
        }
    }
}