import Head from 'next/head'
import styles from '../styles/sass/layout.module.scss'
import Link from 'next/link'
import React from 'react'

const name = 'Blue Eu'
export const siteTitle = 'Blue Log'

export function toggleDarkMode() {
    document.querySelector('html').classList.toggle('dark');
}

const MyButton = React.forwardRef(({ onClick }, ref) => {
    return (
      <span onClick={onClick} ref={ref} className={"fa fa-bolt dark:text-white duration-300"}>
      </span>
    )
  })

export default function Layout({ children, home }) {
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

            <header className={styles.header}>
                <Link href={"/"} >
                    <a className={`${styles.navLogo} text-primary dark:text-dark_primary`}>Blue</a>
                </Link>
                <div className={"switch hover:cursor-pointer"} >
                    <MyButton onClick={toggleDarkMode}/>
                </div>
                <div className={styles.navLanguage}>
                    <Link href={"/ko"}>
                        <a>🇰🇷 </a>
                    </Link>
                    <Link href={"/en"}>
                        <a>🇺🇸 </a>
                    </Link>
                    <Link href={"/ja"}>
                        <a>🇯🇵</a>
                    </Link>
                </div>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← back</a>
                    </Link>
                </div>
            )}
        </div>
    )
}