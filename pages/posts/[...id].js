import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/sass/utils.module.scss'

export default function Post({ postData }) {
  return (
    <Layout>
    <div className={utilStyles.postHeader}>
        <title>{postData.title}</title>
        <h1 className={`${utilStyles.primary} text-xl font-semibold`}>{postData.title}</h1>
        <div className={`${utilStyles.subtext} text-sm pt-1`}>{postData.subtitle}</div>
        <div className={`${utilStyles.subtext} text-xs pt-3`}>
            <Date dateString={postData.date} />
        </div>
    </div>
      <article>
        <br />
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml }} />
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