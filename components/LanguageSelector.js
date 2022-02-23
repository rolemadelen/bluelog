import { LanguageList, LanguageListWrapper } from "./custom-tw-components";
import navlink from '@data/navlink'
import Link from "next/link";


const LanguageSelector = props => {
    const blogNav = navlink.blog
    return (
        <LanguageListWrapper>
            {
                blogNav.map(tab => (
                    <LanguageList className="languageSelector" key={tab.link} id={tab.name}>
                        <Link href={tab.link}>
                            <a>
                                {tab.name}
                            </a>
                        </Link>
                    </LanguageList>
                ))
            }
        </LanguageListWrapper>
    )
}
export default LanguageSelector;