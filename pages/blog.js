import Container from '@components/Container'
import CardContainer from '@components/CardContainer'
import utilStyles from '@styles/utils.module.scss'
import { generateRSSFeed } from '@lib/generateRSSFeed'
import { getSortedPostsData } from '@lib/blog'
import metadata from '@data/metadata'

export default function Blog({ allPostsData }) {
    const customMeta = {
        title: `${metadata.title} - Blog`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, subtitle, date, title, tags }) => (
                      <CardContainer lang={id[0]} slug={id[1]} subtitle={subtitle} date={date} title={title} tags={tags ? tags : []} key={id}/>
                    ))}
                </ul>
            </>
        </Container>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData("all")
    generateRSSFeed(allPostsData);
    return {
        props: {
            allPostsData
        }
    }
}