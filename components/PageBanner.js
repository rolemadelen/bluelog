import { PageHeader, PageTitle, PageSubtitle } from "./custom-tw-components";

const PageBanner = props => {
    return (
        <PageHeader>
            <PageTitle>{props.title}</PageTitle>
            <PageSubtitle>
                {props.subtitle}
            </PageSubtitle>
        </PageHeader>
    )
}
export default PageBanner;