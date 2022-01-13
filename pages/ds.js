import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/template'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/sass/utils.module.scss'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("ds")
    return {
        props: {
            allPostsData
        }
    }
}

export default function DS({ allPostsData }) {
    return (
        <Layout ds>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={"mt-5"}>
                <ul className={`${utilStyles.list}`}>
                    {allPostsData.map(({ id, title, lang, category}) => (
                        <li className={'shadow-none flex justify-between flex-wrap mb-2 border-b-[1px] dark:border-gray-600'} key={id}>
                            <Link href={`/ds/${id[0]}`}>
                                <a className="text-sm text-primary dark:text-dark_primary w-3/4">{title}</a>
                            </Link>
                            <div className={`text-xs text-secondary dark:text-dark_secondary w-1/4 text-right`}>
                                <span>{`${lang.toLowerCase()} | ${category}`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </Layout>
    )
}