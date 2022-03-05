import Footer from '@components/Footer'
import Container from '@components/Container'
import { Banner, ProjectContainer, ProjectCard } from '@components/custom-tw-components'
import PageBanner from '@components/PageBanner'
import Image from 'next/image'
import projectlink from '@data/projectlink'
import utilStyles from '@styles/utils.module.scss'

const ProjectLayout = () => {
    const projects = projectlink.projects
    return (
        <Container>
            <Banner>
                <PageBanner
                    title={"Toy Projects"}
                    subtitle={"A way to expand my view 🤖"}
                />
            </Banner>
            <ProjectContainer>
                {projects.map(p => (
                    <a href={p.link} target="_blank" rel="noreferrer" key={p.title}>
                        <ProjectCard>
                            <span className={"py-1 text-xs text-secondary dark:text-dsecondary hover:decoration-none"}>{p.spec}</span>
                            <Image
                                priority
                                src={p.cover}
                                className={utilStyles.roundedImage}
                                alt={p.title}
                                width={300} height={200}
                                objectFit="cover"
                            />
                        </ProjectCard>
                    </a>
                ))}
            </ProjectContainer>
            <Footer />
        </Container>
    )
}

export default ProjectLayout