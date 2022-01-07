import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/sass/utils.module.scss'
import Link from 'next/link'

export default function Post({ postData }) {
    return (
        <Layout>
            <li className={`${utilStyles.postHeader} ${postData.lang}`}>
                <title>{postData.title}</title>
                <h1 className={`${utilStyles.primary} text-xl font-semibold`}>{postData.title}</h1>
                <div className={`${utilStyles.subtext} text-sm pt-1`}>{postData.subtitle}</div>
                <div className={`${utilStyles.subtext} text-xs pt-3`}>
                    <Date dateString={postData.date} />
                </div>
            </li>
            <div className={utilStyles.availableLanguage}>
                {postData.availableLanguage.map(post => (
                    <div>
                        <Link href={`/posts/${post.lang}/${post.slug}`}>
                            <a>{post.langName}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <article>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}