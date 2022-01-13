import Container from '../components/Container'
import utilStyles from '../styles/utils.module.scss'
import { generateRSSFeed } from '../lib/generateRSSFeed'
import { getSortedPostsData } from '../lib/blog'
import Card from '../components/Card'
import metadata from '../data/metadata'

export default function Blog({ allPostsData }) {
    const customMeta = {
        title: `${metadata.title} - Blog`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, subtitle, date, title, tags }) => (
                      <Card lang={id[0]} slug={id[1]} subtitle={subtitle} date={date} title={title} tags={tags ? tags : []}/>
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