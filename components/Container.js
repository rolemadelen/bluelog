import React from 'react'
import Head from 'next/head'
import styles from '../styles/container.module.scss'
import metadata from '../data/metadata'
import NavLink from './NavLink'
import LightSwitch from './LightSwitch'

const Container = (props) => {
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
        <section className={`${styles.container} mt-8`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{meta.title}</title>
                <meta name="description" content="Blue's Programming Blog" />
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

            <header className={`flex relative items-center justify-end mb-5`}>
                <NavLink link={"/"} customClass={`${styles.navLogo} text-primary dark:text-dark_primary absolute left-0 top-[-1.7em]`} value="Blue" />
                <div className={"flex items-center"}>
                    <div className={styles.navLink}>
                        <NavLink link={"/blog"} customClass={"text-primary dark:text-dark_primary"} value={"Blog"} />
                        <NavLink link={"/about"} customClass={"text-primary dark:text-dark_primary"} value={"About"} />
                        <NavLink link={"/ds"} customClass={"text-primary dark:text-dark_primary"} value={"DS"} />
                        <NavLink link={"/algo"} customClass={"text-primary dark:text-dark_primary"} value="Algo" />
                        <NavLink link={"/cp"} customClass={"text-primary dark:text-dark_primary"} value="CP" />
                    </div>
                    <LightSwitch customIcon={"fa fa-bolt"} customClass={"hover:cursor-pointer dark:text-white duration-300"} />
                </div>
                {meta.page == "blog" && (
                    <div className={styles.navLanguage}>
                        <NavLink link={"/blog/ko"} value={"🇰🇷 "} />
                        <NavLink link={"/blog/en"} value={"🇺🇸 "} />
                        <NavLink link={"/blog/ja"} value={"🇯🇵 "} />
                    </div>
                )}
            </header>
            <main>{props.children}</main>
        </section>
    )
}

export default Container;