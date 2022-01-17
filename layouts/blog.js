import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Date from '@components/Date'
import Footer from '@components/Footer'
import Comments from '@components/Comments'
import Container from '@components/Container'
import utilStyles from '@styles/utils.module.scss'
import Codeblock from '@lib/codeblock.js'
import tw from "tailwind-styled-components"

const BlogLayout = ({ post }) => {
    return (
        <Container page={"blog"}>
            <div className={`py-2 my-5 border-b-[1px]`}>
                <Header>{post.title}</Header>
                <div className={`text-xs text-secondary dark:text-dsecondary py-2`}>
                    <Date dateString={post.date} />
                </div>
            </div>
            <div className={utilStyles.availableLanguage}>
                {post.availableLanguage.map((post, i) => (
                    <div key={i}>
                        <Link href={`/blog/${post.lang}/${post.slug}`}>
                            <a className={"text-white dark:text-dprimary bg-tags_bg"}>{post.langName}</a>
                        </Link>
                    </div>
                ))}
            </div>
            <article className={`text-primary dark:text-dprimary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
            <Footer />
        </Container>
    )
}

const Header = tw.h1`
    text-2xl
    font-semibold
    text-primary
    dark:text-dprimary
`

export default BlogLayout