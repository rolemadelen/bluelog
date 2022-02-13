import tw from 'tailwind-styled-components'


//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.ul` 
    list-none
    p-0
    m-0
    mt-[4em]
`

//////////////////////////////////////////////////////
///  Blog Post Layout
//////////////////////////////////////////////////////
export const Article = tw.article`
    text-primary 
    dark:text-dprimary 
    pb-5 
    border-b-[1px] 
    dark:border-gray-600
`

//////////////////////////////////////////////////////
///  Post Component
//////////////////////////////////////////////////////
export const PostContainer = tw.section`
    mt-8
    text-primary
    dark:text-dprimary
    dark:border-gray-600
    text-sm
    w-full
`

export const PostTitle = tw.div`
    text-primary
    dark:text-dprimary
    text-xl
    font-bold
`

export const PostSubtitle = tw.div`
    text-secondary
    dark:text-dsecondary
    py-1
    text-sm
`

export const LanguageButtons = tw.div` 
    flex
    absolute
    right-0
`

//////////////////////////////////////////////////////
///  PostList Component
//////////////////////////////////////////////////////
export const List = tw.li`
    flex
    list-none
    items-center
`

export const Title = tw.div` 
    text-primary 
    dark:text-dprimary
    overflow-hidden
    text-ellipsis
    w-[25em]
    whitespace-pre
`

//////////////////////////////////////////////////////
///  Home Layout
//////////////////////////////////////////////////////
export const BannerEmp = tw.span`
    dark:text-[#66caff]
    text-[#ff7ca8]
`

export const Banner = tw.div` 
    relative
`

export const BannerImage = tw.div`
    w-full 
    h-[14em] 
    sm:h-[25em] 
    mr-5

    bg-bluexx 
    bg-cover 
    bg-no-repeat 
    rounded 
    duration-200 
`

export const BannerText = tw.h1`
    home-header 
    
    font-poppin 
    text-primary 
    dark:text-dprimary 
    text-5xl 
    sm:text-6xl 
    font-bold 
    
    absolute 
    top-[5%] 
    sm:top-[20%] 
    left-0 
    sm:left-[5%]
`

//////////////////////////////////////////////////////
/// RecentPostContainer Component
//////////////////////////////////////////////////////
export const SubContainer = tw.div`
    mb-8
`

//////////////////////////////////////////////////////
///  Doc Layout
//////////////////////////////////////////////////////
export const Layout = tw.div`
    flex
    w-full
`

//////////////////////////////////////////////////////
///  DocAside  Component
//////////////////////////////////////////////////////
export const DocAsideContainer = tw.section`
    w-[28%]
    h-full
    px-6
    pt-5
    
    fixed
    flex
    flex-col
    overflow-y-scroll
    
    bg-[#efefef]
    dark:bg-[#1a1b1e]
    
    duration-300
`
export const DocAsideHeader = tw.span`
    mt-2
    
    text-1
    text-primary
    dark:text-dprimary
`
export const DocAsideLink = tw.a`
    px-1
    py-0.5
    leading-5
    
    text-[0.8em]
    text-gray-600
    dark:text-dsecondary
    
    hover:text-[#289aff]
    hover:dark:text-[#289aff]
    hover:no-underline
    
    duration-300
`

//////////////////////////////////////////////////////
///  DocContainer  Component
//////////////////////////////////////////////////////
export const DocBaseContainer = tw.section`
    max-w-[50rem]
    w-full

    mt-5
    mr-4
    ml-[26%]
    pl-4
    pr-4

    relative
`

export const DocContent = tw.main`
    flex
    w-full
    mx-auto
`

//////////////////////////////////////////////////////
///  DocPost  Component
//////////////////////////////////////////////////////
export const DocPostContainer = tw.section`
    w-full
    text-sm
    text-primary
    dark:text-dprimary
    dark:border-gray-600
`

export const DocPostTitle = tw.h1`
    text-primary
    dark:text-dprimary
    text-lg
`

//////////////////////////////////////////////////////
///  Container  Component
//////////////////////////////////////////////////////
export const BaseContainer = tw.section`
    max-w-[40rem]
    w-full
    px-[1rem]
    mx-auto
    relative
    mt-5
`

//////////////////////////////////////////////////////
///  CPSection Component
//////////////////////////////////////////////////////
export const CPHeader = tw.h1`
    text-lg 
    font-semibold 
    text-primary 
    dark:text-dprimary 
    mt-8 
    pb-2
`

//////////////////////////////////////////////////////
///  Footer Component
//////////////////////////////////////////////////////
export const FooterContainer = tw.footer` 
    flex 
    flex-col 
    justify-center 
    items-center 
    my-8
    text-sm 
    text-primary 
    dark:text-dsecondary
`

//////////////////////////////////////////////////////
///  Header Component
//////////////////////////////////////////////////////
export const HeaderContainer = tw.header`
    flex 
    relative
    items-center
    justify-between
    flex-wrap
    mb-10
`

export const MobileNav = tw.div`
    flex
`

export const NavLanguage = tw.div`
    absolute
    right-0
    top-[3em]
`

