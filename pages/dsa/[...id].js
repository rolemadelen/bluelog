import { allPosts } from '.contentlayer/data'
import { getAllPosts } from '@lib/doc'
import DocLayout from '@layouts/doc'

export default function DSPostPage({ post, tree }) {
    return (
        <DocLayout post={post} tree={tree} page={"dsa"} />
    )
}

export async function getStaticPaths() {
    const paths = allPosts.map(post => ({
        params: {
            id: post.pathSegments.map((_) => _.pathName),
        },
    }))
    return { 
        paths, 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    const pagePath = params.id.join('/')
    const post = allPosts.find(
        (_) => _.pathSegments.map((_) => _.pathName).join('/') === pagePath
    )

    const tree = getAllPosts("dsa")
    return { 
        props: { 
            post, 
            tree 
        } 
    }
}