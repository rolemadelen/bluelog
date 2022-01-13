import Link from "next/link";

const NavLink = props => {
    return (
        <Link href={props.link}>
            <a className={`${props.customClass}`}>{props.value}</a>
        </Link>
    )
}

export default NavLink;