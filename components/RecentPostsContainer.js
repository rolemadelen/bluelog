import NavLink from '@components/NavLink'
import Date from '@components/date'
import utilStyles from '@styles/utils.module.scss'

const RecentPostsContainer = props => {
    return (
        <>
            <div className={"mb-8"}>
                <div className={"flex justify-between items-center border-b-[1px] mb-2"}>
                    <h1 className={"text-lg font-semibold text-primary dark:text-dprimary"}> {props.value} </h1>
                    <NavLink link={props.link} customClass={`flex justify-end text-sm text-primary dark:text-dprimary`} value={"View more..."} />
                </div>
                <ul className={utilStyles.list}>
                    {props.posts.map(({ id, title, date }) => (
                        <li className={"shadow-none pb-1 flex justify-between items-center"} key={id}>
                            <NavLink link={`/blog/${id[0]}/${id[1]}`} customClass={"text-sm text-primary dark:text-dprimary"} value={title} />

                            <div className={`text-xs text-secondary dark:text-dsecondary`}>
                                <Date dateString={date} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default RecentPostsContainer;