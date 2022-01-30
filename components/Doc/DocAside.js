import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'
import css from '@styles/docaside.module.scss'

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
                            <DocAsideHeader className={"font-poppin"}>{post.dir}</DocAsideHeader>
                            {
                                (page === "dsa" && (
                                    post.subPosts.map(({ id, title, section }) => (
                                        <Link href={`${post.dir}/${id}`} key={title} passHref>
                                            <DocAsideLink onClick={foldSide} className={"font-poppin"}><span className={`mr-1`}>[{section}]</span> {title}</DocAsideLink>
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

const DocAsideContainer = tw.section`
    flex
    flex-col
    fixed
    left-0
    h-full
    overflow-y-scroll
    w-[25%]
    px-8
    pt-5
    pb-5
    bg-[#efefef]
    dark:bg-[#1a1b1e]
    duration-300
`
const DocAsideHeader = tw.span`
    text-1
    text-primary
    dark:text-dprimary
    mt-2
`
const DocAsideLink = tw.a`
    px-2
    py-0.5
    text-[0.8em]
    leading-5
    text-gray-600
    dark:text-dsecondary
    hover:text-[#289aff]
    hover:dark:text-[#289aff]
    hover:no-underline
    duration-300
`
export default DocAside