import metadata from "@data/metadata"
import Image from "next/image"
import Link from "next/link"
import tw from "tailwind-styled-components"

const Footer = () => {
    const sns = [
        { name: 'github', link: metadata.social.github },
        { name: 'twitter', link: metadata.social.twitter },
        { name: 'rss', link: metadata.social.rss },
    ]
    return (
        <FooterContainer>
            <div>© 2022 <a href={sns[0].link}>{metadata.author}</a>. powered by&nbsp;<a href="https://vercel.com/">Vercel</a></div>
            <div className="snsLinks flex items-center justify-center">
                {
                    sns.map((social) => (
                        <Link href={social.link} key={social.link} passHref>
                            <a className={"px-2"}>
                                <Image
                                    priority
                                    src={`/images/social/${social.name}.svg`}
                                    height={20}
                                    width={20}
                                    alt={social.name}
                                />
                            </a>
                        </Link>
                    ))
                }
            </div>
        </FooterContainer>
    )
}

const FooterContainer = tw.footer` 
    flex 
    flex-col 
    justify-center 
    items-center 
    my-8
    text-sm 
    text-primary 
    dark:text-dsecondary
`

export default Footer