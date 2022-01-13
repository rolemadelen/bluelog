import utilStyles from '../styles/utils.module.scss'
import NavLink from './NavLink';

const CPSection = props => {
    return (
        <section className={"mt-8 text-center"}>
            <h1 className={"text-lg font-semibold text-primary dark:text-dark_primary mt-8 pb-2"}>
                <a href={props.link} className={"text-primary dark:text-dark_primary"}>{props.value}</a>
            </h1>
            <ul className={`${utilStyles.list} flex flex-wrap justify-center`}>
                {props.posts.map(({ id, level }) => (
                    <li className={`${level} text-xs p-1 m-1.5 w-20 text-center rounded duration-300`} key={id}>
                        <NavLink link={`/cp/${id[0]}/${id[1]}`} value={`${id[1]}`} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CPSection;