import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Post from '@components/Post'
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
            <Post title={post.title} subtitle={post.subtitle} date={post.date} />
            <LanguageContainer className={`postTag`}>
                {post.availableLanguage.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.lang}/${post.slug}`}>
                        <a>{post.langName} </a>
                    </Link>
                ))}
            </LanguageContainer>
            <article className={`text-primary dark:text-dprimary pb-5 border-b-[1px] dark:border-gray-600`}>
                <ReactMarkdown components={Codeblock}>{post.markdown}</ReactMarkdown>
            </article>
            <Comments />
            <Footer />
        </Container>
    )
}

const LanguageContainer = tw.div` 
    flex
    absolute
    right-0
`

const Header = tw.h1`
    text-2xl
    font-semibold
    text-primary
    dark:text-dprimary
`

export default BlogLayout