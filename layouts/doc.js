import DocContainer from "@components/Doc/DocContainer";
import DocAside from "@components/Doc/DocAside";
import DocPost from "@components/Doc/DocPost";
import Comments from "@components/Comments";

import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import Footer from '@components/Footer'
import { Layout } from "@components/custom-tw-components";

const DocLayout = ({ post, tree, page }) => {
    const customMeta = {
        title: post.title,
        description: 'Implementing various data structures.',
    }

    return (
        <Layout>
            <DocAside tree={tree} page={page} />
            <DocContainer customMeta={customMeta}>
                <DocPost title={post.title} date={post.date}>
                    <ReactMarkdown components={Codeblock}>{post.body.raw}</ReactMarkdown>
                    <Comments />
                    <Footer />
                </DocPost>
            </DocContainer>
        </Layout>
    )
}

export default DocLayout