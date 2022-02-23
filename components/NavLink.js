import Link from "next/link";

const NavLink = props => {
    return (
        <Link href={props.link}>
            <a className={`${props.customClass} font-bold text-gray-700 dark:text-dprimary hover:no-underline hover:text-[#289aff] hover:dark:text-[#289aff] duration-300`}>{props.value}</a>
        </Link>
    )
}
export default NavLink;