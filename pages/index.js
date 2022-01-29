
import Footer from '@components/Footer'
import Container from '@components/Container'
import RecentPostsContainer from '@components/RecentPostsContainer'
import tw from 'tailwind-styled-components'
import { allBlogs } from '.contentlayer/data'
import { allCPs } from '.contentlayer/data'
import { allDSAs } from '.contentlayer/data'

export default function Home({ posts, cps, dsas }) {
    return (
        <Container>
            <>
                <div className={"relative"}>
                    <div className={"rounded bg-bluexx w-full h-[14em] sm:h-[25em] bg-cover bg-no-repeat duration-200 mr-5"}></div>
                    <h1 className={"font-poppin home-header text-primary dark:text-dprimary text-5xl sm:text-6xl font-bold absolute top-[5%] sm:top-[20%] left-0 sm:left-[5%]"}>Hello<Span>!</Span><br/>I<Span>&apos;</Span>m Blue<Span>.</Span></h1>
                </div>
                <Header>Recent Posts</Header>
                <RecentPostsContainer value={"Blog"} link={"blog"} posts={posts ? posts : []} />
                <RecentPostsContainer value={"Online Judge"} link={"cp"} posts={cps ? cps : []} />
                <RecentPostsContainer value={"DS & Algo"} link={"dsa"} posts={dsas ? dsas : []} />
            </>
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const POSTS = 5;

    const posts = allBlogs.sort((a, b) => {
        return (a.date < b.date) ? 1 : -1;
    }).slice(0,POSTS);

    const dsas = allDSAs.sort((a, b) => {
        return (a.date < b.date) ? 1 : -1;
    }).slice(0,POSTS);
    
    const cps = allCPs.sort(() => .5 - Math.random()).slice(0,POSTS);

    return {
        props: {
            posts,
            cps,
            dsas,
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
