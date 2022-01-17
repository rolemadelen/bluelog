import Date from "@components/Date";
import tw from 'tailwind-styled-components'

const DocPost = ({title, date, children}) => {
    return (
        <DocPostContainer>
            <DocPostTitle>{title}</DocPostTitle>
            {date && (
                <Date dateString={date}/>
            )}
            { children }
        </DocPostContainer>
    )
}

const DocPostContainer = tw.section`
    text-primary
    dark:text-dprimary
    dark:border-gray-600
    text-sm
    w-full
`

const DocPostTitle = tw.h1`
    text-primary
    dark:text-dprimary
    font-[Poppins]
    text-lg
`

export default DocPost;