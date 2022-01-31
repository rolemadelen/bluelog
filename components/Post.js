import Date from "@components/Date";
import Link from 'next/link'
import { LanguageButtons, PostContainer, PostSubtitle, PostTitle } from "./custom-tw-components";

const Post = ({ post, title, subtitle, date, children }) => {
    return (
        <PostContainer>
            <PostTitle className={"font-poppin"}>{title}</PostTitle>
            {subtitle && (
                <PostSubtitle>{subtitle}</PostSubtitle>
            )}
            {date && (
                <Date customClass={"text-xs"} dateString={date} />
            )}
            {post && (
                <LanguageButtons className={`postTag`}>
                    {post.availableLanguage.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.lang}/${post.slug}`}>
                            <a>{post.langName} </a>
                        </Link>
                    ))}
                </LanguageButtons>
            )}
            <hr />
            {children}
        </PostContainer>
    )
}

export default Post;