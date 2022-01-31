import ReactMarkdown from 'react-markdown'
import Post from '@components/Post'
import Footer from '@components/Footer'
import Comments from '@components/Comments'
import Container from '@components/Container'
import Codeblock from '@lib/codeblock.js'
import { Article } from '@components/custom-tw-components'

const BlogPostLayout = ({ post }) => {
    return (
        <Container page={"blog"}>
            <Post post={post} title={post.title} subtitle={post.subtitle} date={post.date} />
            <Article>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </Article>
            <Comments />
            <Footer />
        </Container>
    )
}

export default BlogPostLayout