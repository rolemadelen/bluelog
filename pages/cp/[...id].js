import { allCPs } from '.contentlayer/data'
import CPLayout from '@layouts/cp'

export default function CPPostPage({ post }) {
    return (
        <CPLayout post={post} page={"cp"} />
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

    return {
        props: {
            post,
        }
    }
}