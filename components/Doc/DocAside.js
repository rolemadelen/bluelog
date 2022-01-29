import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'

const DocAside = ({ tree, page }) => {
    function activeLink(e) {
        const link = document.querySelector('.templink')
        if (link) { 
            link.classList.remove('active');
            link.classList.remove('templink')
        }
        e.target.classList.add('templink')
        e.target.classList.add('active')
    }
    return (
        <DocAsideContainer>
            {
                tree.map(post => (
                    <React.Fragment key={post.dir}>
                        <DocAsideHeader>{post.dir}</DocAsideHeader>
                        {
                            (page === "dsa" && (
                                post.subPosts.map(({ id, title, section }) => (
                                    <>
                                        <Link href={`${post.dir}/${id}`} passHref>
                                            <DocAsideLink><span className={`mr-1`}>[{section}]</span> {title}</DocAsideLink>
                                        </Link>
                                    </>
                                ))))
                        }
                        {
                            (page == "cp" && (
                                post.subPosts.map(({ id, title, level }) => (
                                    <>
                                        <Link href={`${post.dir}/${id[0]}-${id[1]}`} passHref>
                                            <DocAsideLink onClick={activeLink} className={level}>{title}</DocAsideLink>
                                        </Link>
                                    </>
                                ))))
                        }
                    </React.Fragment>
                ))
            }
        </DocAsideContainer>
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
    text-[0.85em]
    text-primary
    dark:text-dprimary
    mt-2
    font-[Poppins]
`
const DocAsideLink = tw.a`
    px-2
    py-0.5
    text-[0.8em]
    font-[Poppins]
    leading-5
    text-gray-600
    dark:text-dsecondary
`
export default DocAside