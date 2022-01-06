import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/sass/utils.module.scss'
import { getSortedPostsData  } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return{
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, subtitle, lang, date, title }) => (
            <li className={`${utilStyles.card}`} key={id}>
                <span className={`${lang}`}></span>
              <Link href={`/posts/${id[0]}/${id[1]}`}>
                  <a class="text-lg font-semibold">{title}</a>
              </Link>
              <br/>
              <div className={`${utilStyles.subtext} text-sm pt-1 pb-2`}>
                  {subtitle}
              </div>
              <div className={`${utilStyles.subtext} text-xs`}>
                  <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}