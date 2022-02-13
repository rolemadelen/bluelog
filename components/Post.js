import Date from "@components/Date";
import Link from 'next/link'
import utilStyles from '@styles/utils.module.scss'
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
            <div className={`${utilStyles.tags} flex justify-end`}>
                {post.tags.map((tag, i) => (
                    <div key={i} className={"px-2 mr-1 text-xs border-[1.5px] border-tags_bg text-secondary dark:border-dtags_bg dark:text-dsecondary"}>
                        {tag}
                    </div>
                ))}
            </div>
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