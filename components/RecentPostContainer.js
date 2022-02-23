import NavLink from '@components/NavLink'
import Date from '@components/Date'
import utilStyles from '@styles/utils.module.scss'
import { SubContainer, Subtitle } from './custom-tw-components'

const RecentPostsContainer = ({ posts, title, link }) => {
    return (
        <SubContainer>
            <div className={"flex justify-between items-center mt-4 border-b dark:border-slate-700"}>
                <div className={"py-2 text-xl md:text-2xl font-bold text-primary dark:text-dprimary"}> {title} </div>
                {link == "dsa" && (
                    <NavLink link={"/dsa/Graph/dijkstra"} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
                )}

                {link != "dsa" && (
                    <NavLink link={link} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
                )}
            </div>

            {link == 'blog' && (
                <ul className={`p-0 m-0 list-none flex flex-wrap justify-center`}>
                    {posts.map(({ url_path, title, subtitle, date }) => (
                        <li className={"p-4 m-2 rounded w-[18em] h-[12em] list-none"} key={title}>
                            <NavLink link={url_path.replace('-', '/')} customClass={"text-md md:text-lg text-primary dark:text-dprimary"} value={title} />
                            <Subtitle>
                                {subtitle} &nbsp;
                                <Date dateString={date} customClass={"italic text-sm break-normal inline-block"} />
                            </Subtitle>
                        </li>
                    ))}
                </ul>
            )}

            {link == 'cp' && (
                <ul className={`p-0 m-0 list-none flex flex-wrap justify-center`}>
                    {posts.map(({ url_path, title, from }) => (
                        <li className={"p-4 m-2 rounded w-[18em] h-[8em] list-none"} key={title}>
                            <NavLink link={url_path} customClass={"text-md md:text-lg text-primary dark:text-dprimary"} value={title} />

                            <div className={`text-sm italic text-secondary dark:text-dsecondary inline-block`}> &nbsp; — {from} </div>
                        </li>
                    ))}
                </ul>
            )}

            {link == 'dsa' && (
                <ul className={`p-0 m-0 list-none flex flex-wrap justify-center`}>
                    {posts.map(({ url_path, title, date }) => (
                        <li className={"p-4 m-2 rounded w-[18em] h-[8em] list-none"} key={title}>
                            <NavLink link={url_path} customClass={"text-md md:text-lg text-primary dark:text-dprimary"} value={title} />
                            &nbsp; <Date dateString={date} customClass={"italic text-sm break-normal inline-block"} />
                        </li>
                    ))}
                </ul>
            )}
        </SubContainer>
    )
}

export default RecentPostsContainer;