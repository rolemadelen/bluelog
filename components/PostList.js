import Date from "@components/Date";
import utilStyles from '@styles/utils.module.scss'
import Link from "next/link";
import { List, Subtitle, Title } from "./custom-tw-components";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Link href={`/blog/${post.lang}/${post.slug}`} key={`${post.lang}-${post.slug}`} passHref>
                    <a className={`hover:no-underline`}>
                        <List className={`${post.lang}`}>
                            <Title> {post.title} </Title>
                            <Subtitle> {post.subtitle} </Subtitle>

                            <div className={`text-xs text-secondary dark:text-dsecondary`}>
                                <Date dateString={post.date} />
                            </div>

                            <div className={`${utilStyles.tags} flex justify-end`}>
                                {post.tags.map((tag, i) => (
                                    <div key={i} className={"px-2 m-1 text-xs border-[1.5px] border-tags_bg text-secondary dark:border-dtags_bg dark:text-dsecondary"}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </List>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default PostList;