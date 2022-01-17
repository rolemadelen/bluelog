import Image from 'next/image';
import Footer from '@components/Footer';
import Container from '@components/Container';
import metadata from '@data/metadata';

export default function About() {
    const customMeta = {
        title: `${metadata.title} - About`
    }
    return (
        <Container customMeta={customMeta}>
            <section className={"mx-auto"}>
                <div className={"text-center text-primary dark:text-dprimary"}>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={"absolute left-0 top-0 rounded mx-auto"}
                        height={180}
                        width={225}
                        alt={"blue eu"}
                    />
                    <div className={"mx-auto text-sm"}>
                        <h1 className={"font-semibold text-2xl"}>Blue Eu</h1>
                        <div className={"pb-2"}>🇰🇷 &nbsp; 🇺🇸  &nbsp; 🇯🇵 &nbsp;</div>
                        배움을 즐기는 1년차 프론트엔드 개발자입니다.
                        <br/><br/>
                        현재 일본에 거주하며 의료관련 스타트업에서 프론트엔드 개발자로 일을 하고 있습니다.
                        백엔드 부분도 조금아니마 일을 맡아 하다보니 큰 관심이 생겨, 현재는 백엔드 관련
                        지식을 틈틈히 공부하고 있습니다. 기회가 된다면 백엔드 개발자로도 일을 해보고 싶습니다.
                        <br/> <br/>
                        <hr/>
                        <br/>
                        그림 그리는 걸 좋아합니다.
                        <br /> <br />

                        <Image
                            priority
                            src="/video/draw.webp"
                            type="video/webp"
                            className={"mb-1 mx-auto"}
                            height={350}
                            width={350}
                            alt={"Drawing Video"}
                        />  
                        <Image
                            priority
                            src="/images/draw1.jpg"
                            className={"absolute left-0 top-0 rounded"}
                            height={400}
                            width={600}
                            alt={"My drawing eg 1"}
                        />
                        <Image
                            priority
                            src="/images/draw2.jpg"
                            className={"absolute left-0 top-0 rounded"}
                            height={230}
                            width={600}
                            alt={"My drawing eg 2"}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    )
}