import Footer from '@components/Footer';
import Container from '@components/Container';
import metadata from '@data/metadata';
import { PageHeader, PageSubtitle, PageTitle } from '@components/custom-tw-components';
import Link from 'next/link';

export default function About() {
    const customMeta = {
        title: `${metadata.title} - About`
    }
    return (
        <Container customMeta={customMeta}>
            <PageHeader>
                <PageTitle>{"Hi, I'm Blue."}</PageTitle>
                <PageSubtitle>
                    {"I am a frontend engineer working in a startup based in Japan."}
                </PageSubtitle>
                <email>
                    <Link href={"mailto:eu.blue@pm.me?subject=Request from euisblue.me"} target="_blank" rel="noreferrer">
                        <a className={`text-gray-700`}> eu.blue@pm.me </a>
                    </Link>
                </email>
            </PageHeader>

            <div>
                <p>
                    I first started programming with C language as a hobby in 2012, but it is only recent (2021 April) that I started my career as a web engineer.
                </p>
                <p>
                    I have a bachelor degree in Cognitive Science with specialization in Human-Computer Interaction, so I took couple computer science courses but what I know of programming today is mostly self-taught.
                </p>
            </div>
            <Footer />
        </Container>
    )
}