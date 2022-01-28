import NavLink from '@components/NavLink'
import LightSwitch from '@components/LightSwitch'
import styles from '@styles/container.module.scss'
import tw from 'tailwind-styled-components'
import navlink from '@data/navlink'

const Header = props => {
    const baseNav = navlink.base
    const blogNav = navlink.blog
    return (
        <>
            <HeaderContainer>
                <NavLink link={"/"} customClass={`${styles.navLogo}`} value="euisblue" />
                <div className={"flex items-center"}>
                    <div className={styles.navLink}>
                        {
                            baseNav.map(tab => (
                                <>
                                    <NavLink link={tab.link} customClass={"hover:text-blue-400 dark:hover:text-[#5282db] font-[Poppins]"} value={tab.name} />
                                </>
                            ))
                        }
                    </div>
                    <LightSwitch customIcon={"fa fa-bolt"} customClass={"hover:cursor-pointer dark:text-white duration-300"} />
                </div>
                {props.page == "blog" && (
                    <NavLanguage>
                        {
                            blogNav.map(tab => (
                                <>
                                    <NavLink link={tab.link} customClass={"px-[0.5em]"} value={tab.name} />
                                </>
                            ))
                        }
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
    flex-wrap
    mb-10
    mt-5
`

const NavLanguage = tw.div`
    absolute
    right-0
    top-[3em]
`

export default Header;