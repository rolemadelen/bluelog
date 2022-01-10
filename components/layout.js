import Head from 'next/head'
import styles from '/styles/sass/layout.module.scss'
import Link from 'next/link'
import React from 'react'

const name = 'Blue Eu'
export const siteTitle = 'Blue Log'

export function toggleDarkMode() {
    document.querySelector('html').classList.toggle('dark');
}

const ToggleButton = React.forwardRef(({ onClick }, ref) => {
    return (
        <span onClick={onClick} ref={ref} className={"fa fa-bolt dark:text-white duration-300"}>
        </span>
    )
})

export default function Layout({ children, home, blog }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Blue's Programming Blog"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={`flex relative items-center justify-end mb-5`}>
                <Link href={"/"} >
                    <a className={`${styles.navLogo} text-primary dark:text-dark_primary absolute left-0 top-[-1.5em]`}>Blue</a>
                </Link>
                <div className={"flex"}>
                    <div className={styles.navLink}>
                        <Link href="/blog">
                            <a className={"text-primary dark:text-dark_primary"}>Blog</a>
                        </Link>
                        <Link href="/about">
                            <a className={"text-primary dark:text-dark_primary"}>About</a>
                        </Link>
                        <Link href="/ds">
                            <a className={"text-primary dark:text-dark_primary"}>DS</a>
                        </Link>
                        <Link href="/algo">
                            <a className={"text-primary dark:text-dark_primary"}>Algo</a>
                        </Link>
                        <Link href="/cp">
                            <a className={"text-primary dark:text-dark_primary"}>CP</a>
                        </Link>
                    </div>
                    <div className={"switch hover:cursor-pointer"} >
                        <ToggleButton onClick={toggleDarkMode} />
                    </div>
                </div>
                {blog && (
                    <div className={styles.navLanguage}>
                        <Link href={"/blog/ko"}>
                            <a>🇰🇷 </a>
                        </Link>
                        <Link href={"/blog/en"}>
                            <a>🇺🇸 </a>
                        </Link>
                        <Link href={"/blog/ja"}>
                            <a>🇯🇵</a>
                        </Link>
                    </div>
                )}
            </header>
            <main>{children}</main>
        </div>
    )
}