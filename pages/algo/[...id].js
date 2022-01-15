import { allAlgoPosts } from '.contentlayer/data'
import { getAllPosts } from '@lib/algo'
import DocLayout from '@layouts/ds'

export default function DSPostPage({ post, tree }) {
    return (
        <DocLayout post={post} tree={tree} />
    )
}

export async function getStaticPaths() {
    const paths = allAlgoPosts.map(post => ({
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
    const post = allAlgoPosts.find(
        _ => _.pathSegments.map((_) => _.pathName).join('/') === pagePath
    )

    const tree = getAllPosts()
    return { 
        props: { 
            post, 
            tree 
        } 
    }
}