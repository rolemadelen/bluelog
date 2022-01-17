import Comments from "@components/Comments"
import Container from "@components/Container"
import Footer from "@components/Footer"
import Codeblock from '@lib/codeblock.js'
import ReactMarkdown from 'react-markdown'

const CPLayout = ({ post }) => {
    const customMeta = {
        title: `Bluelog - ${post.level}`,
    }
    return (
        <Container customMeta={customMeta}>
            <article className={`text-primary dark:text-dprimary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
            <Footer />
        </Container>
    )
}

export default CPLayout