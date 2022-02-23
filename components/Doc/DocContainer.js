import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import metadata from '@data/metadata'
import styles from '@styles/docaside.module.scss'
import { DocBaseContainer, DocContent } from '@components/custom-tw-components'

const DocContainer = (props) => {
    const meta = {
        author: metadata.author,
        title: metadata.title,
        description: metadata.description,
        type: 'website',
        image: encodeURI(`${metadata.url}/images/blue.png`),
        twitterHandle: metadata.socialHandle.twitter,
        page: props.page,
        ...props.customMeta,
    }
    return (
        <DocBaseContainer id="docContainer" className={styles.docContainer}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{meta.title}</title>
                <meta name="description" content="Data structures and Algorithms" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                <meta property="og:url" content={meta.url} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content={meta.author} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:site" content={meta.twitterHandle} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            <Header page={meta.page}/>
            <DocContent>{props.children}</DocContent>
        </DocBaseContainer>
    )
}

export default DocContainer;