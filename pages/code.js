import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/sass/utils.module.scss'
import { getSortedPostsData  } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("all")
    return{
        props: {
            allPostsData
        }
    }
}

export default function Code({ allPostsData }){
  return (
    <Layout code>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, subtitle, lang, date, title, tags }) => (<span></span>))}
        </ul>
      </section>
    </Layout>
  )
}