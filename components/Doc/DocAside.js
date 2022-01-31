import Link from "next/link"
import React from "react"
import css from '@styles/docaside.module.scss'
import { DocAsideContainer, DocAsideHeader, DocAsideLink } from "@components/custom-tw-components"

const DocAside = ({ tree, page }) => {
    function toggleMobileMenu() {
        document.querySelector('#docAside').classList.toggle(css.unfold)
        document.querySelector('#docAsideMenu').classList.toggle(css.mobileDocAsideSlide)
        const docContainer = document.querySelector('#docContainer')
        docContainer.style.position = (docContainer.style.position == "fixed") ? "relative" : "fixed"
    }

    function foldSide() {
        document.querySelector('#docAside').classList.toggle(css.unfold)
        document.querySelector('#docAsideMenu').classList.toggle(css.mobileDocAsideSlide)
        document.querySelector('#docContainer').style.position = "relative"
    }

    return (
        <>
            <DocAsideContainer id="docAside" style={{ scrollBehavior: 'smooth' }} className={css.docAside}>
                {
                    tree.map(post => (
                        <React.Fragment key={post.dir}>
                            <DocAsideHeader>{post.dir}</DocAsideHeader>
                            {
                                (page === "dsa" && (
                                    post.subPosts.map(({ id, title, section }) => (
                                        <Link href={`${post.dir}/${id}`} key={title} passHref>
                                            <DocAsideLink onClick={foldSide}>
                                                <span className={`mr-1`}>[{section}]</span> {title}
                                            </DocAsideLink>
                                        </Link>
                                    ))))
                            }
                        </React.Fragment>
                    ))
                }
            </DocAsideContainer>
            <div id="docAsideMenu" className={`${css.mobileDocAside} dark:bg-docaside-mobile-dark bg-docaside-mobile-light duration-200 w-[45px] h-[45px]`} onClick={toggleMobileMenu}></div>
        </>
    )
}

export default DocAside