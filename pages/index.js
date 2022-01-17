import { getBlogPosts } from '@lib/home'
import Footer from '@components/Footer'
import Container from '@components/Container'
import RecentPostsContainer from '@components/RecentPostsContainer'
import tw from 'tailwind-styled-components'

export default function Home({ blogPosts }) {
    return (
        <Container>
            <>
                <div className={"relative"}>
                    <div className={"rounded bg-bluexx w-full h-[14em] sm:h-[25em] bg-cover bg-no-repeat duration-200"}></div>
                    <h1 className={"text-primary dark:text-dprimary text-5xl sm:text-6xl font-bold font-[Poppins] absolute top-[20%] sm:top-[28%] left-0 sm:left-[5%]"}>Hello<Span>!</Span><br/>I<Span>&apos;</Span>m Blue<Span>.</Span></h1>
                </div>
                <Header>Recent Posts</Header>
                <RecentPostsContainer value={"Blog"} link={"blog"} posts={blogPosts ? blogPosts : []} />
            </>
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const blogPosts = getBlogPosts()
    return {
        props: {
            blogPosts
        }
    }
}

const Header = tw.h1`
    text-2xl
    text-primary
    dark:text-dprimary
    mb-2
`

const Span = tw.span`
    dark:text-[#66caff]
    text-[#ff7ca8]
`
