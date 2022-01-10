import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '/lib/algo'
import Layout, { siteTitle } from '/components/layout'
import utilStyles from '/styles/sass/utils.module.scss'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Algo({ allPostsData }) {
    return (
        <Layout algo>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={"mt-5"}>
                <ul className={`${utilStyles.list}`}>
                    {allPostsData.map(({ id, title, lang, category }) => (
                        <li className={'shadow-none flex justify-between pb-2'} key={id}>
                            <Link href={`/algo/${id[0]}`}>
                                <a className="text-sm text-primary dark:text-dark_primary">{title}</a>
                            </Link>
                            <div className={`text-xs text-secondary dark:text-dark_secondary`}>
                                <span>{`${lang.toLowerCase()} | ${category}`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}