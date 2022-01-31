import Comments from "@components/Comments";

import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import tw from "tailwind-styled-components"
import Footer from '@components/Footer'
import Container from "@components/Container";
import Post from "@components/Post";

const CPLayout = ({ post, page }) => {
    const customMeta = {
        title: post.title,
        description: 'Solutions to various online judge problems.',
    }

    return (
        <Container page={page} customMeta={customMeta}>
            <Post title={post.title} date={post.date}>
                <ReactMarkdown components={Codeblock}>{post.body.raw}</ReactMarkdown>
                <Comments />
                <Footer />
            </Post>
        </Container>
    )
}

export default CPLayout