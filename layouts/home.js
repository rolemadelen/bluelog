import Footer from '@components/Footer'
import Container from '@components/Container'
import RecentPostContainer from '@components/RecentPostContainer'
import { Banner } from '@components/custom-tw-components'
import PageBanner from '@components/PageBanner'
import Image from 'next/image'
import utilStyles from '@styles/utils.module.scss'

const HomeLayout = ({ blog, cp, dsa }) => {
    return (
        <Container>
            <Banner>
                <Image className={utilStyles.circleImage} width={170} height={170} src="/images/blue.png" alt="Profile Image"/>
                <PageBanner 
                    title={"Failure leads to understanding."} 
                    subtitle={"If you're a living organism, failure in life is inevitable. \nWe fail by default. So why not we learn from it?"}
                />
            </Banner>
            <RecentPostContainer title={"BLog"} link={"blog"} posts={blog} />
            <RecentPostContainer title={"Competitive Programming"} link={"cp"} posts={cp} />
            <RecentPostContainer title={"Data Structure & Algorithm"} link={"dsa"} posts={dsa} />
            <Footer />
        </Container>
    )
}

export default HomeLayout