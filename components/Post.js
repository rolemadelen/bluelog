import Date from "@components/Date";
import tw from 'tailwind-styled-components'

const Post = ({title, date, children}) => {
    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            {date && (
                <Date dateString={date}/>
            )}
            <Hr />
            { children }
        </PostContainer>
    )
}

const PostContainer = tw.section`
    text-primary
    dark:text-dprimary
    dark:border-gray-600
    text-sm
    w-full
`

const PostTitle = tw.h1`
    text-primary
    dark:text-dprimary
    font-[Poppins]
    text-lg
`

const Hr = tw.hr`
    border-[1px]
    border-[#ffffff1c]
`

export default Post;