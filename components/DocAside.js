import Link from "next/link"
import React from "react"
import css from '@styles/docaside.module.scss'
import { DocAsideContainer, DocAsideHeader, DocAsideLink } from "@components/custom-tw-components"

const DocAside = ({ tree, page }) => {
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
                                            <DocAsideLink>
                                                <span className={`mr-1`}>[{section}]</span> {title}
                                            </DocAsideLink>
                                        </Link>
                                    ))))
                            }
                        </React.Fragment>
                    ))
                }
            </DocAsideContainer>
        </>
    )
}

export default DocAside