import DocAside from "@components/Doc/DocAside";
import DocPost from "@components/Doc/DocPost";
import Comments from "@components/Comments";

import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import Footer from '@components/Footer'
import Container from "@components/Container";
import styles from '@styles/docaside.module.scss'

const DocLayout = ({ post, tree, page }) => {
    const customMeta = {
        title: post.title,
        description: 'Implementing various data structures.',
    }

    return (
        <Container>
            <div className={styles.flex}>
                <DocAside tree={tree} page={page} />
                <DocPost title={post.title} date={post.date}>
                    <ReactMarkdown components={Codeblock}>{post.body.raw}</ReactMarkdown>
                    <Comments />
                    <Footer />
                </DocPost>
            </div>
        </Container>
    )
}

export default DocLayout