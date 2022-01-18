import { allAlgoPosts } from '.contentlayer/data'
import { getAllPosts } from '@lib/doc'
import DocLayout from '@layouts/doc'

export default function AlgoPostPage({ post, tree }) {
    return (
        <DocLayout post={post} tree={tree} page={"algo"}/>
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
        (_) => _.pathSegments.map((_) => _.pathName).join('/') === pagePath
    )

    const tree = getAllPosts("algo")
    return {
        props: {
            post,
            tree
        }
    }
}