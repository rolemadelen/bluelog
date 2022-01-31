import { DocPostContainer, DocPostTitle } from "@components/custom-tw-components";
import Date from "@components/Date";

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

export default DocPost;