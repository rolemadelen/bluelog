import HomeLayout from "@layouts/home";
import { allBlogs } from '.contentlayer/data'

export default function Home({ posts }) {
    return (
        <HomeLayout blog={posts}/>
    )
}

export async function getStaticProps() {
    const NUM_POSTS = 8;
    
    const posts = allBlogs.sort((a, b) => {
        return (a.date < b.date) ? 1 : -1;
    }).slice(0, NUM_POSTS);

    return {
        props: {
            posts,
        }
    }
}