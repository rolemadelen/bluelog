import Date from "./date";
import NavLink from "./NavLink";
import utilStyles from '../styles/utils.module.scss'

const Card = (props) => {
    return (
        <>
            <li className={`${utilStyles.card} ${props.lang} bg-card_bg dark:bg-dark_card_bg shadow-[0px_1px_3px_1px_#80afe7] dark:shadow-[0px_1px_3px_1px_black] duration-300`} key={`${props.lang}-${props.slug}`}>
                <NavLink link={`/blog/${props.lang}/${props.slug}`} customClass={"text-lg font-semibold text-primary dark:text-dark_primary"} value={props.title} />

                <div className={`text-sm pt-1 pb-2 text-secondary dark:text-dark_secondary`}>
                    {props.subtitle}
                </div>

                <div className={`text-xs text-secondary dark:text-dark_secondary`}>
                    <Date dateString={props.date} />
                </div>

                <div className={`${utilStyles.tags} flex justify-end`}>
                    {props.tags.map((tag, i) => (
                        <div key={i} className={"px-2 m-1 text-xs bg-tags_bg text-secondary dark:bg-dark_tags_bg dark:text-dark_secondary"}>
                            {tag}
                        </div>
                    ))}
                </div>
            </li>
        </>
    )
}

export default Card;