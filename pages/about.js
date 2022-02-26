import Footer from '@components/Footer';
import Container from '@components/Container';
import metadata from '@data/metadata';
import { PageHeader, PageSubtitle, PageTitle } from '@components/custom-tw-components';
import Link from 'next/link';
import utilStyles from '@styles/utils.module.scss'
import Image from 'next/image';

export default function About() {
    const customMeta = {
        title: `${metadata.title} - About`
    }
    return (
        <Container customMeta={customMeta}>
            <Image priority className={utilStyles.circleImage} src="/images/animoji.gif" width={120} height={120} alt="Blue.gif" />
            <PageHeader>
                <PageTitle>{"Hi, I'm Blue."}</PageTitle>
                <PageSubtitle>
                    {"I am a frontend engineer working in a startup based in Japan."}
                </PageSubtitle>
                <email>
                    <Link href={"mailto:eu.blue@pm.me?subject=Request from euisblue.me"} target="_blank" rel="noreferrer">
                        <a className={`text-secondary dark:text-dsecondary`}> eu.blue@pm.me </a>
                    </Link>
                </email>
            </PageHeader>

            <hr />
            <div className={`text-pramiry dark:text-dprimary`}>
                <p>
                    I first started programming with C language as a hobby in 2012, but it is only recent (2021 April) that I started my career as a web engineer.
                    I have a bachelor degree in Cognitive Science with specialization in Human-Computer Interaction, so I took couple computer science courses but what I know of programming today is mostly self-taught.
                </p>

                <p>
                    I love analyzing data and finding root cause to fix an error.
                </p>
            </div>
            <hr />
            <Footer />
        </Container>
    )
}