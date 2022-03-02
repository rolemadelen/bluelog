import NavLink from '@components/NavLink'
import Date from '@components/Date'
import { SubContainer, Subtitle } from './custom-tw-components'

const RecentPostsContainer = ({ posts, title, link }) => {
    return (
        <SubContainer>
            <div className={"flex justify-between items-center mt-4 dark:border-slate-700"}>
                <div className={"py-2 text-xl md:text-2xl font-semibold text-primary dark:text-dprimary"}> {title} </div>
                <NavLink link={link} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
            </div>

            <ul className={`list-none flex flex-wrap justify-between`}>
                {posts.map(({ url_path, title, subtitle, date }) => (
                    <li className={"shadow-[0px_0px_4px_rgba(0,0,0,0.3)] rounded-md hover:shadow-[0px_0px_6px_rgba(0,0,0,0.6)] p-4 m-3 rounded w-full sm:w-[18em] h-[9em] sm:h-[12em] list-none text-center duration-300"} key={title}>
                        <NavLink link={url_path.replace('-', '/')} customClass={"text-md md:text-lg text-primary dark:text-dprimary"} value={title} />
                        <Subtitle>
                            {subtitle} &nbsp;
                            <Date dateString={date} customClass={"italic text-xs break-normal inline-block"} />
                        </Subtitle>
                    </li>
                ))}
            </ul>
        </SubContainer>
    )
}

export default RecentPostsContainer;