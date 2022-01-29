import { allDSAs } from '.contentlayer/data'
import { getAllPosts } from '@lib/doc'
import DocLayout from '@layouts/doc'

export default function DSAPostPage({ post, tree }) {
    return (
        <DocLayout post={post} tree={tree} page={"dsa"} />
    )
}

export async function getStaticPaths() {
    const paths = allDSAs.map(post => ({
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
    const post = allDSAs.find(
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