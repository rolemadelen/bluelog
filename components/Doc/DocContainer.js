import React from 'react'
import Head from 'next/head'
import Header from '@components/Header'
import metadata from '@data/metadata'
import tw from 'tailwind-styled-components'
import styles from '@styles/docaside.module.scss'

const DocContainer = (props) => {
    const meta = {
        author: metadata.author,
        title: metadata.title,
        description: metadata.description,
        type: 'website',
        image: encodeURI(`${metadata.url}/images/profile.jpg`),
        twitterHandle: metadata.socialHandle.twitter,
        page: props.page,
        ...props.customMeta,
    }
    return (
        <BaseContainer id="docContainer" className={styles.docContainer}>
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
            <Content>{props.children}</Content>
        </BaseContainer>
    )
}

const BaseContainer = tw.section`
    max-w-[50rem]
    w-full
    ml-[26%]
    px-8
    relative
    mt-5
`

const Content = tw.main`
    flex
    w-full
    mx-auto
`

export default DocContainer;