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

export default function Home({ allPostsData }){
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, subtitle, lang, date, title, tags }) => (
            <li className={`${utilStyles.card} ${lang}`} key={id}>
              <Link href={`/posts/${id[0]}/${id[1]}`}>
                  <a className="text-lg font-semibold">{title}</a>
              </Link>
              <br/>
              <div className={`${utilStyles.subtext} text-sm pt-1 pb-2`}>
                  {subtitle}
              </div>
              <div className={`${utilStyles.subtext} text-xs`}>
                  <Date dateString={date} />
              </div>
              <div className={`${utilStyles.tags} flex justify-end`}>
                {tags.map((tag,i) => (
                    <div key={i} className={"px-2 m-1 text-xs"}>
                        {tag}
                    </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}