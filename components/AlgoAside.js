import Link from "next/link"
import React from "react"
import tw from 'tailwind-styled-components'

const AlgoAside = ({ tree }) => {
    return (
        <AlgoAsideContainer>
            {
                tree.map(post => (
                    <React.Fragment key={post.dir}>
                        <AlgoAsideHeader>{post.dir}</AlgoAsideHeader>
                        {
                            post.subPosts.map(({ id, title }) => (
                                <>
                                    <Link href={`${post.dir}/${id}`} passHref>
                                        <AlgoAsideLink>{title}</AlgoAsideLink>
                                    </Link>
                                </>
                            ))
                        }
                    </React.Fragment>
                ))
            }
        </AlgoAsideContainer>
    )
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 55f29e4 (Fixd casing discrepancies)
const AlgoAsideContainer = tw.section`
    flex
    flex-col
    sm:w-[30%]
    border-r-[1px]
    mr-4
`

const AlgoAsideHeader = tw.span`
    text-[0.8em]
    text-primary
    dark:text-dprimary
    mt-2
    font-[Poppins]
`
const AlgoAsideLink = tw.a`
    px-3
    py-1
    text-[0.75em]
    font-[Poppins]
    leading-4
`

=======
>>>>>>> ff127ad (Sidebar menu added)
export default AlgoAside