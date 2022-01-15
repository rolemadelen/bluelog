import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'

const DSAside = ({ tree }) => {
    return (
        <DSAsideContainer>
            {
                tree.map(post => (
                    <React.Fragment key={post.dir}>
                        <DSAsideHeader>{post.dir}</DSAsideHeader>
                        {
                            post.subPosts.map(({ id, title, section }) => (
                                <>
                                    <Link href={`${post.dir}/${id}`} passHref>
                                        <DSAsideLink><span className={`mr-1`}>{section}</span> {title}</DSAsideLink>
                                    </Link>
                                </>
                            ))
                        }
                    </React.Fragment>
                ))
            }
        </DSAsideContainer>
    )
}

const DSAsideContainer = tw.section`
    flex
    flex-col
    sm:w-[30%]
    border-r-[1px]
    mr-4
`

const DSAsideHeader = tw.span`
    text-[0.8em]
    text-primary
    dark:text-dprimary
    mt-2
    font-[Poppins]
`
const DSAsideLink = tw.a`
    px-3
    py-1
    text-[0.75em]
    font-[Poppins]
    leading-4
`
export default DSAside