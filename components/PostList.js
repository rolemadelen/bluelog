import Date from "@components/Date";
import NavLink from "@components/NavLink";
import utilStyles from '@styles/utils.module.scss'
import tw from 'tailwind-styled-components'

const PostList = ({ posts }) => {
    return (
        <>
            {posts.map((post) => (
                <List className={`${post.lang}`} key={`${post.lang}-${post.slug}`}>
                    <NavLink link={`/blog/${post.lang}/${post.slug}`} customClass={"text-lg font-semibold text-primary dark:text-dprimary"} value={post.title} />

                    <div className={`text-sm pt-1 pb-2 text-secondary dark:text-dsecondary`}>
                        {post.subtitle}
                    </div>

                    <div className={`text-xs text-secondary dark:text-dsecondary`}>
                        <Date dateString={post.date} />
                    </div>

                    <div className={`${utilStyles.tags} flex justify-end`}>
                        {post.tags.map((tag, i) => (
                            <div key={i} className={"px-2 m-1 text-xs bg-tags_bg text-secondary dark:bg-dtags_bg dark:text-dsecondary"}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </List>
            ))}
        </>
    )
}

const List = tw.li`
    shadow-[0px_1px_3px_1px_#cbcbcb] 
    dark:shadow-cool_gray_700 
    duration-300ms
    mt-[1em]
    mb-[1.5em]
    p-[1.2em]
    rounded
    list-none
`

export default PostList;