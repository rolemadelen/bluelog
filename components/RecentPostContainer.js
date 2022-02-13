import NavLink from '@components/NavLink'
import Date from '@components/Date'
import utilStyles from '@styles/utils.module.scss'
import { SubContainer } from './custom-tw-components'

const RecentPostsContainer = ({ posts, title, link }) => {
    return (
        <SubContainer>
            <div className={"flex justify-between items-center border-b-[1px] mb-2"}>
                <h1 className={"text-lg font-semibold text-primary dark:text-dprimary"}> {title} </h1>
                {link == "dsa" && (
                    <NavLink link={"/dsa/Graph/dijkstra"} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
                )}

                {link != "dsa" && (
                    <NavLink link={link} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
                )}
            </div>

            {link == 'blog' && (
                <ul className={utilStyles.list}>
                    {posts.map(({ url_path, title, date }) => (
                        <li className={"pb-1 flex justify-between items-center"} key={title}>
                            <NavLink link={url_path.replace('-', '/')} customClass={"text-sm text-primary dark:text-dprimary w-[65%]"} value={title} />

                            <div className={`text-xs text-secondary dark:text-dsecondary w-[35%] text-right`}>
                                <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {link == 'cp' && (
                <ul className={utilStyles.list}>
                    {posts.map(({ url_path, title, from, level }) => (
                        <li className={"pb-1 flex justify-between items-center"} key={title}>
                            <NavLink link={url_path} customClass={"text-sm text-primary dark:text-dprimary"} value={title} />

                            <div className={`text-xs text-secondary dark:text-dsecondary`}>
                                {from} - {level}
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {link == 'dsa' && (
                <ul className={utilStyles.list}>
                    {posts.map(({ url_path, title, date }) => (
                        <li className={"pb-1 flex justify-between items-center"} key={title}>
                            <NavLink link={url_path} customClass={"text-sm text-primary dark:text-dprimary"} value={title} />
                            <div className={`text-xs text-secondary dark:text-dsecondary w-[35%] text-right`}>
                                <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </SubContainer>
    )
}

export default RecentPostsContainer;