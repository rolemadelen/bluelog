
import Footer from '@components/Footer'
import Container from '@components/Container'
import RecentPostContainer from '@components/RecentPostContainer'
import { Banner, BannerImage, BannerText, BannerEmp } from '@components/custom-tw-components'

const HomeLayout = ({ blog, cp, dsa }) => {
    return (
        <Container>
            <Banner>
                <BannerImage />
                <BannerText>
                    Hello<BannerEmp>!</BannerEmp><br />I<BannerEmp>&apos;</BannerEmp>m Blue<BannerEmp>.</BannerEmp>
                </BannerText>
            </Banner>
            <RecentPostContainer title={"Blog"} link={"blog"} posts={blog} />
            <RecentPostContainer title={"Online Judge"} link={"cp"} posts={cp} />
            <RecentPostContainer title={"DS & Algo"} link={"dsa"} posts={dsa} />
            <Footer />
        </Container>
    )
}

export default HomeLayout