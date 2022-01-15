import DSContainer from "@components/DSContainer";
import ReactMarkdown from 'react-markdown'
import Codeblock from '@lib/codeblock.js'
import MDPost from "@components/MDPost";
import AlgoAside from "@components/AlgoAside";
import Comments from '@components/comments'

const DocLayout = ({ post, tree }) => {
    const customMeta = {
        title: post.title,
        description: 'Code snippets',
    }
    return (
        <DSContainer customMeta={customMeta} customBaseClass={`max-w-[55rem]`} customClass={'flex'}>
            <AlgoAside tree={tree} />
            <MDPost title={post.title} date={post.date}>
                <article className={`text-primary dark:text-dprimary pb-5 dark:border-gray-600`}>
                    <ReactMarkdown components={Codeblock}>{post.body.raw}</ReactMarkdown>
                </article>
                <Comments />
            </MDPost>
        </DSContainer>
    )
}

export default DocLayout