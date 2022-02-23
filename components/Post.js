import Date from "@components/Date";
import Link from 'next/link'
import { PostContainer, PageTitle, PageSubtitle } from "./custom-tw-components";
import { LanguageList, LanguageListWrapper } from "./custom-tw-components";

const Post = ({ post, tags, title, subtitle, date, children }) => {
    return (
        <PostContainer>
            <PageTitle className={""}>{title}</PageTitle>
            {subtitle && (
                <PageSubtitle>
                    {subtitle} &nbsp;
                    <Date dateString={date} customClass={"italic text-sm break-normal inline-block"} />
                </PageSubtitle>
            )}
            {!subtitle && date && (
                <Date customClass={"italic text-sm break-normal inline-block"} dateString={date} />
            )}
            {post && (
                <LanguageListWrapper>
                    {post.availableLanguage.map((post) => (
                        <LanguageList className="languageSelector" key={post.slug}>
                            <Link href={`/blog/${post.lang}/${post.slug}`}>
                                <a>
                                    {post.langName}
                                </a>
                            </Link>
                        </LanguageList>
                    ))}
                </LanguageListWrapper>
            )}
            <hr />
            {children}
        </PostContainer>
    )
}

export default Post;