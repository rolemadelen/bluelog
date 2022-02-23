import NavLink from '@components/NavLink'
import LightSwitch from '@components/LightSwitch'
import styles from '@styles/container.module.scss'
import navlink from '@data/navlink'
import { HeaderContainer, MobileNav } from './custom-tw-components'

const Header = props => {
    const baseNav = navlink.base

    function toggleMobileMenu(e) {
        document.querySelector('#mobileMenu').classList.toggle('hide');
        document.querySelector('#hamburger').classList.toggle(`${styles.active}`);
    }

    return (
        <>
            <HeaderContainer className={styles.header}>
                <NavLink link={"/"} customClass={`${styles.navLogo}`} value="euisblue" />
                <div className={"flex items-center"}>
                    <div className={styles.navLink}>
                        {
                            baseNav.map(tab => (
                                <NavLink key={tab.link} link={tab.link} customClass={"hover:text-[#289aff] dark:hover:text-[#289aff]"} value={tab.name} />
                            ))
                        }
                    </div>
                </div>
            </HeaderContainer>

            <LightSwitch customIcon={"fa fa-moon"} customClass={`${styles.lightswitch} hover:cursor-pointer text-gray-700 dark:text-white duration-300 ml-4`} />

            <MobileNav className={styles.mobileNavLink}>
                <div id="hamburger" className={`${styles.mobileHamburger} duration-200`} onClick={toggleMobileMenu}>
                    <div className={`${styles.bar} dark:bg-[#f9f9f9]`}></div>
                    <div className={`${styles.bar} dark:bg-[#f9f9f9]`}></div>
                    <div className={`${styles.bar} dark:bg-[#f9f9f9]`}></div>
                </div>
                <div id="mobileMenu" className={`hide ${styles.mobileMenu}`}>
                    {
                        baseNav.map(tab => (
                            <NavLink key={tab.link} link={tab.link} customClass={"hover:text-[#289aff] dark:hover:text-[#289aff] py-1"} value={tab.name} />
                        ))
                    }
                </div>
            </MobileNav>
        </>
    )
}

export default Header;