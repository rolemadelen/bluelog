import NavLink from '@components/NavLink'
import LightSwitch from '@components/LightSwitch'
import styles from '@styles/container.module.scss'
import tw from 'tailwind-styled-components'
import navlink from '@data/navlink'

const Header = props => {
    const baseNav = navlink.base
    const blogNav = navlink.blog

    function toggleMobileMenu(e) {
        document.querySelector('#mobileMenu').classList.toggle('hide');
    }

    return (
        <>
            <HeaderContainer className={styles.header}>
                <NavLink link={"/"} customClass={`${styles.navLogo}`} value="euisblue" />
                <div className={"flex items-center"}>
                    <div className={styles.navLink}>
                        {
                            baseNav.map(tab => (
                                <NavLink key={tab.link} link={tab.link} customClass={"font-poppin hover:text-[#289aff] dark:hover:text-[#289aff]"} value={tab.name} />
                            ))
                        }
                        {props.page == "blog" && (
                            <NavLanguage>
                                {
                                    blogNav.map(tab => (
                                        <NavLink key={tab.link} link={tab.link} customClass={"px-[0.5em]"} value={tab.name} />
                                    ))
                                }
                            </NavLanguage>
                        )}
                    </div>
                </div>
            </HeaderContainer>

            <LightSwitch customIcon={"fa fa-moon"} customClass={`${styles.lightswitch} hover:cursor-pointer dark:text-white duration-300 ml-4`} />

            <MobileNav className={styles.mobileNavLink}>
                <div className={`${styles.mobileHamburger} dark:bg-mobile-dark bg-mobile-light duration-200 w-[25px] h-[20px]`} onClick={toggleMobileMenu}></div>
                <div id="mobileMenu" className={`hide ${styles.mobileMenu}`}>
                    {
                        baseNav.map(tab => (
                            <NavLink key={tab.link} link={tab.link} customClass={"font-poppin hover:text-[#289aff] dark:hover:text-[#289aff] py-1"} value={tab.name} />
                        ))
                    }
                    {props.page == "blog" && (
                        <div className={"my-[0.5em]"}>
                            {
                                blogNav.map(tab => (
                                    <NavLink key={tab.link} link={tab.link} customClass={"px-[0.7em]"} value={tab.name} />
                                ))
                            }
                        </div>
                    )}
                </div>
            </MobileNav>
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
`

const MobileNav = tw.div`
    flex
`

const NavLanguage = tw.div`
    absolute
    right-0
    top-[3em]
`

export default Header;