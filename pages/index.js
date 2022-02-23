import HomeLayout from "@layouts/home";
import { allBlogs } from '.contentlayer/data'
import { allCPs } from '.contentlayer/data'
import { allDSAs } from '.contentlayer/data'

export default function Home({ posts, cps, dsas }) {
    return (
        <HomeLayout blog={posts} cp={cps} dsa={dsas} />
    )
}

export async function getStaticProps() {
    const NUM_POSTS = 4;
    
    const posts = allBlogs.sort((a, b) => {
        return (a.date < b.date) ? 1 : -1;
    }).slice(0, NUM_POSTS);

    const dsas = allDSAs.sort((a, b) => {
        return (a.date < b.date) ? 1 : -1;
    }).slice(0, NUM_POSTS * 2);

    const cps = allCPs.sort(() => .5 - Math.random()).slice(0, NUM_POSTS * 2);
    
    return {
        props: {
            posts,
            cps,
            dsas,
        }
    }
}