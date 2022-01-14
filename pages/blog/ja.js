import utilStyles from '@styles/utils.module.scss'
import Container from '@components/Container'
import CardContainer from '@components/CardContainer'
import { getSortedPostsData  } from '@lib/blog'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("ja")
    return{
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }){
  return (
    <Container page={"blog"}>
      <section>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, subtitle, lang, date, title, tags}) => (
            <CardContainer lang={id[0]} slug={id[1]} subtitle={subtitle} date={date} title={title} tags={tags ? tags : []}/>
          ))}
        </ul>
      </section>
    </Container>
  )
}