import NavLink from '@components/NavLink'
import Date from '@components/Date'
import { SubContainer, Subtitle } from './custom-tw-components'

const RecentPostsContainer = ({ posts, title, link }) => {
    return (
        <SubContainer>
            <div className={"flex justify-between items-center mt-4 border-b dark:border-slate-700"}>
                <div className={"py-2 text-xl md:text-2xl font-semibold text-primary dark:text-dprimary"}> {title} </div>
                <NavLink link={link} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
            </div>

            <ul className={`p-0 m-0 list-none flex flex-wrap justify-between`}>
                {posts.map(({ url_path, title, subtitle, date }) => (
                    <li className={"p-4 m-2 rounded w-full sm:w-[18em] h-[9em] sm:h-[12em] list-none"} key={title}>
                        <NavLink link={url_path.replace('-', '/')} customClass={"text-md md:text-lg text-primary dark:text-dprimary"} value={title} />
                        <Subtitle>
                            {subtitle} &nbsp;
                            <Date dateString={date} customClass={"italic text-sm break-normal inline-block"} />
                        </Subtitle>
                    </li>
                ))}
            </ul>
        </SubContainer>
    )
}

export default RecentPostsContainer;