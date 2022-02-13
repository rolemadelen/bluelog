import Date from "@components/Date";
import Link from "next/link";
import { List, Title } from "./custom-tw-components";

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <Link href={`/blog/${post.lang}/${post.slug}`} key={`${post.lang}-${post.slug}`} passHref>
                    <a className={`hover:no-underline`}>
                        <List className={`${post.lang}`}>
                            <div className={`text-xs text-secondary dark:text-dsecondary w-[7em] whitespace-pre ml-5 mr-1`}>
                                <Date dateString={post.date} />
                            </div>
                            <Title> {post.title} </Title>
                        </List>
                    </a>
                </Link>
            ))}
        </>
    )
}

export default PostList;