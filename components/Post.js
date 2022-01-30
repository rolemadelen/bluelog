import Date from "@components/Date";
import tw from 'tailwind-styled-components'

const Post = ({ title, subtitle, date, children }) => {
    return (
        <PostContainer>
            <PostTitle className={"font-poppin"}>{title}</PostTitle>
            {subtitle && (
                <PostSubtitle>{subtitle}</PostSubtitle>
            )}
            {date && (
                <Date customClass={"text-xs"} dateString={date} />
            )}
            <hr />
            {children}
        </PostContainer>
    )
}

const PostContainer = tw.section`
    mt-8
    text-primary
    dark:text-dprimary
    dark:border-gray-600
    text-sm
    w-full
`

const PostTitle = tw.div`
    text-primary
    dark:text-dprimary
    text-xl
    font-bold
`

const PostSubtitle = tw.div`
    text-secondary
    dark:text-dsecondary
    py-1
    text-sm
`

export default Post;