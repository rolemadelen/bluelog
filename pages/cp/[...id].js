import { allCPs } from '.contentlayer/data'
import { getAllPosts } from '@lib/doc'
import DocLayout from '@layouts/doc'

export default function CPPostPage({ post, tree }) {
    return (
        <DocLayout post={post} tree={tree} page={"cp"}/>
    )
}

export async function getStaticPaths() {
    const paths = allCPs.map(post => ({
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
    const post = allCPs.find(
        (_) => _.pathSegments.map((_) => _.pathName).join('/') === pagePath
    )

    const tree = getAllPosts("cp")
    return { 
        props: { 
            post, 
            tree 
        } 
    }
}