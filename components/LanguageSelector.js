import { LanguageList, LanguageListWrapper } from "./custom-tw-components";
import navlink from '@data/navlink'
import Link from "next/link";
import React, { useState } from "react";


const LanguageSelector = props => {
    const blogNav = navlink.blog

    const [selectedLang, setSelectedLang] = useState('English')

    function toggleActive(e) {
        document.querySelector(`#한국어`).classList.remove("active");
        document.querySelector(`#English`).classList.remove("active");
        document.querySelector(`#日本語`).classList.remove("active");

        setSelectedLang(`${e.target.text}`);
        const tag = document.querySelector(`#${selectedLang}`);
        if(tag.classList.contains("active") == false) {
            tag.classList.toggle("active");
        }
    }

    return (
        <LanguageListWrapper>
            {
                blogNav.map(tab => (
                    <LanguageList className="languageSelector" key={tab.link} id={tab.name}>
                        <Link href={tab.link}>
                            <a onClick={toggleActive}>
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