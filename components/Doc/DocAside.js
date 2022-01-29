import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'

const DocAside = ({ tree, page }) => {
    return (
        <DocAsideContainer style={{ scrollBehavior: 'smooth' }}>
            {
                tree.map(post => (
                    <React.Fragment key={post.dir}>
                        <DocAsideHeader className={"font-poppin"}>{post.dir}</DocAsideHeader>
                        {
                            (page === "dsa" && (
                                post.subPosts.map(({ id, title, section }) => (
                                    <>
                                        <Link href={`${post.dir}/${id}`} passHref>
                                            <DocAsideLink className={"font-poppin"}><span className={`mr-1`}>[{section}]</span> {title}</DocAsideLink>
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