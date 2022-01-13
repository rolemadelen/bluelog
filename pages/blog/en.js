import utilStyles from '/styles/utils.module.scss'
import { getSortedPostsData  } from '/lib/blog'
import Link from 'next/link'
import Date from '/components/date'
import Container from '../../components/Container'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("en")
    return{
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }){
  return (
    <Container  page={"blog"}>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, subtitle, lang, date, title, tags }) => (
            <li className={`${utilStyles.card} ${lang} bg-card_bg dark:bg-dark_card_bg shadow-[0px_1px_3px_1px_#80afe7] dark:shadow-[0px_1px_3px_1px_black]`} key={id}>
              <Link href={`/blog/${id[0]}/${id[1]}`}>
              <a className="text-lg font-semibold text-primary dark:text-dark_primary">{title}</a>
              </Link>
              <br/>
              <div className={`text-sm pt-1 pb-2 text_secondary dark:text-dark_secondary`}>
                  {subtitle}
              </div>
              <div className={`text-xs text_secondary dark:text-dark_secondary`}>
                  <Date dateString={date} />
              </div>
              <div className={`${utilStyles.tags} flex justify-end`}>
                {tags.map((tag,i) => (
                    <div key={i} className={"px-2 m-1 text-xs bg-tags_bg text-secondary dark:bg-dark_tags_bg dark:text-dark_secondary"}>
                        {tag}
                    </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}