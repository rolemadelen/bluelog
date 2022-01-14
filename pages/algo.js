import Link from 'next/link'
import { getSortedPostsData } from '@lib/template'
import utilStyles from '@styles/utils.module.scss'
import Container from '@components/Container'
import metadata from '@data/metadata'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("algo")
    return {
        props: {
            allPostsData
        }
    }
}

export default function Algo({ allPostsData }) {
    const customMeta = {
        title: `${metadata.title} - Algorithms`
    }
    return (
        <Container customMeta={customMeta}>
            <section className={"mt-5"}>
                <ul className={`${utilStyles.list}`}>
                    {allPostsData.map(({ id, title, lang, category }) => (
                        <li className={'shadow-none flex justify-between flex-wrap mb-2 border-b-[1px] dark:border-gray-600'} key={id}>
                            <Link href={`/algo/${id[0]}`}>
                                <a className="text-sm text-primary dark:text-dprimary w-3/4">{title}</a>
                            </Link>
                            <div className={`text-xs text-secondary dark:text-dsecondary w-1/4 text-right`}>
                                <span>{`${lang.toLowerCase()} | ${category}`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

        </Container>
    )
}