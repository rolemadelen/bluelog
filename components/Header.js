import NavLink from '@components/NavLink'
import LightSwitch from '@components/LightSwitch'
import styles from '@styles/container.module.scss'
import tw from 'tailwind-styled-components'

const Header = props => {
    return (
        <>
            <HeaderContainer>
                <NavLink link={"/"} customClass={`${styles.navLogo}`} value="euisblue" />
                <div className={"flex items-center"}>
                    <div className={styles.navLink}>
                        <NavLink link={"/blog"} customClass={"hover:text-blue-400 dark:hover:text-blue-400"} value={"Blog"} />
                        <NavLink link={"/about"} customClass={"hover:text-blue-400 dark:hover:text-blue-400"} value={"About"} />
                        <NavLink link={"/ds"} customClass={"hover:text-blue-400 dark:hover:text-blue-400"} value={"DS"} />
                        <NavLink link={"/algo"} customClass={"hover:text-blue-400 dark:hover:text-blue-400"} value="Algo" />
                        <NavLink link={"/cp"} customClass={"hover:text-blue-400 dark:hover:text-blue-400"} value="CP" />
                    </div>
                    <LightSwitch customIcon={"fa fa-bolt"} customClass={"hover:cursor-pointer dark:text-white duration-300"} />
                </div>
                {props.page == "blog" && (
                    <NavLanguage>
                        <NavLink link={"/blog/ko"} customClass={"px-[0.5em]"} value={"🇰🇷 "} />
                        <NavLink link={"/blog/en"} customClass={"px-[0.5em]"} value={"🇺🇸 "} />
                        <NavLink link={"/blog/ja"} customClass={"px-[0.5em]"} value={"🇯🇵 "} />
                    </NavLanguage>
                )}
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = tw.header`
    flex 
    relative
    items-center
    justify-between
    mb-10
`

const NavLanguage = tw.div`
    absolute
    right-0
    top-[3em]
`

export default Header;