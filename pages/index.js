import Head from 'next/head'
import Link from 'next/link'
import Date from '/components/date'
import Layout, { siteTitle } from '/components/layout'
import utilStyles from '/styles/sass/utils.module.scss'
import { getBlogPosts, getAlgoPosts, getDSPosts } from '/lib/home'

export async function getStaticProps() {
    const blogPosts = getBlogPosts()
    const algoPosts = getAlgoPosts()
    const dsPosts = getDSPosts()
    return {
        props: {
            blogPosts,
            algoPosts,
            dsPosts
        }
    }
}

export default function Home({ blogPosts, algoPosts, dsPosts }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={"mt-8"}>
                <h1 className={"text-2xl text-primary dark:text-dark_primary mb-2"}>Recent Posts</h1>
                <div className={"recentBlog mb-8"}>
                    <div className={"flex justify-between items-center border-b-[1px] mb-2"}>
                        <h1 className={"text-lg font-semibold text-primary dark:text-dark_primary"}>Blog</h1>
                        <Link href="/blog">
                            <a className={`flex justify-end text-sm text-primary dark:text-dark_primary`}>View more...</a>
                        </Link>
                    </div>
                    <ul className={utilStyles.list}>
                        {blogPosts.map(({ id, title, date }) => (
                            <li className={"shadow-none pb-1 flex justify-between items-center"} key={id}>
                                <Link href={`/blog/${id[0]}/${id[1]}`}>
                                    <a className="text-sm text-primary dark:text-dark_primary">{title}</a>
                                </Link>
                                <div className={`text-xs text-secondary dark:text-dark_secondary`}>
                                    <Date dateString={date} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"recentDS mb-8"}>
                    <div className={"flex justify-between items-center border-b-[1px] mb-2"}>
                        <h1 className={"text-lg font-semibold text-primary dark:text-dark_primary"}>Data Structure</h1>
                        <Link href="/ds">
                            <a className={`flex justify-end text-sm text-primary dark:text-dark_primary`}>View more...</a>
                        </Link>
                    </div>
                    <ul className={utilStyles.list}>
                        {dsPosts.map(({ id, title, date }) => (
                            <li className={'shadow-none pb-1 flex justify-between items-center'} key={id}>
                                <Link href={`/ds/${id[0]}`}>
                                    <a className="text-sm text-primary dark:text-dark_primary">{title}</a>
                                </Link>
                                <div className={`text-xs text-secondary dark:text-dark_secondary`}>
                                    <Date dateString={date} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"recentAlgo mb-8"}>
                    <div className={"flex justify-between items-center border-b-[1px] mb-2"}>
                        <h1 className={"text-lg font-semibold text-primary dark:text-dark_primary"}>Algorithm</h1>
                        <Link href="/algo">
                            <a className={`flex justify-end text-sm text-primary dark:text-dark_primary`}>View more...</a>
                        </Link>
                    </div>
                    <ul className={utilStyles.list}>
                        {algoPosts.map(({ id, title, date }) => (
                            <li className={'shadow-none pb-1 flex justify-between items-center'} key={id}>
                                <Link href={`/algo/${id[0]}`}>
                                    <a className="text-sm text-primary dark:text-dark_primary">{title}</a>
                                </Link>
                                <div className={`text-xs text-secondary dark:text-dark_secondary`}>
                                    <Date dateString={date} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}