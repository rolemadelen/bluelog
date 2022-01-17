import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'

const DocAside = ({ tree, page }) => {
    return (
        <DocAsideContainer>
            {
                tree.map(post => (
                    <React.Fragment key={post.dir}>
                        <DocAsideHeader>{post.dir}</DocAsideHeader>
                        {
                            (page === "ds" && (
                                post.subPosts.map(({ id, title, section }) => (
                                    <>
                                        <Link href={`${post.dir}/${id}`} passHref>
                                            <DocAsideLink><span className={`mr-1`}>{section}</span> {title}</DocAsideLink>
                                        </Link>
                                    </>
                                ))))
                        }
                        {
                            (page !== "ds" && (
                                post.subPosts.map(({ id, title }) => (
                                    <>
                                        <Link href={`${post.dir}/${id}`} passHref>
                                            <DocAsideLink>{title}</DocAsideLink>
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
    px-8
    w-[25%]
    pt-5
    bg-[#efefef]
    dark:bg-[#18212a]
    duration-300
`
const DocAsideHeader = tw.span`
    text-[0.8em]
    text-primary
    dark:text-dprimary
    mt-2
    font-[Poppins]
`
const DocAsideLink = tw.a`
    px-3
    py-1
    text-[0.75em]
    font-[Poppins]
    leading-4
`
export default DocAside