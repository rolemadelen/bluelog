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

export default AlgoAside