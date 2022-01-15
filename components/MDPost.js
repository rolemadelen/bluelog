import Date from "@components/date";
import tw from 'tailwind-styled-components'

const MDPost = ({title, date, children}) => {
    return (
        <MDPostContainer>
            <MDPostTitle>{title}</MDPostTitle>
            <Date dateString={date}/>
            { children }
        </MDPostContainer>
    )
}

const MDPostContainer = tw.section`
    w-full
    sm:w-[70%]
`

const MDPostTitle = tw.h1`
    text-primary
    dark:text-dprimary
    font-[Poppins]
`

export default MDPost;