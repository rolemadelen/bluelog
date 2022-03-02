import tw from 'tailwind-styled-components'


//////////////////////////////////////////////////////
///  Blog Layout
//////////////////////////////////////////////////////
export const PostListContainer = tw.ul` 
    list-none
    p-0
    m-0
    pt-[3em]
    border-t-[1px]
    border-b-[1px]
    dark:border-slate-700
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
///  LanguageSelector Layout
//////////////////////////////////////////////////////
export const LanguageListWrapper = tw.ul` 
    flex
    mt-3
    mb-4
`

export const LanguageList = tw.li` 
    list-none
    px-4
    mr-2
    border
    rounded-md
    font-medium

    hover:bg-[#289aff]
    dark:hover:bg-[#289aff]
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
    text-2xl
    md:text-3xl
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
    flex-col
    pb-12
`

export const Title = tw.div` 
    text-primary 
    dark:text-dprimary
    overflow-hidden
    text-ellipsis
    whitespace-pre

    cursor-pointer
    font-semibold 
    text-xl 
    md:text-2xl 
    tracking-tighter 
    hover:text-[#289aff]
    dark:hover:text-[#289aff]
    duration-150
`

export const Subtitle = tw.div` 
    text-primary 
    dark:text-dprimary
    pt-2
    pl-1
`

//////////////////////////////////////////////////////
///  Home Layout
//////////////////////////////////////////////////////

export const Banner = tw.div` 
    relative
    text-center
`

//////////////////////////////////////////////////////
///  PageBanner Layout
//////////////////////////////////////////////////////
export const PageHeader = tw.header`
    pb-[2em]
    flex
    flex-col
    justify-center
`

export const PageTitle = tw.div` 
    text-4xl 
    md:text-5xl 
    md:leading-tight 
    font-bold 
    text-gray-800 
    dark:text-dprimary
`

export const PageSubtitle = tw.div` 
    mt-3 
    text-md
    md:text-lg
    dark:text-dprimary
    font-light
    whitespace-pre-line
`

//////////////////////////////////////////////////////
/// RecentPostContainer Component
//////////////////////////////////////////////////////
export const SubContainer = tw.div`
    mb-8
`

//////////////////////////////////////////////////////
///  DocAside  Component
//////////////////////////////////////////////////////
export const DocAsideContainer = tw.section`
    w-[35%]
    h-full
    pr-8
    pt-5
    
    relative
    flex
    flex-col
    overflow-y-scroll
    
    duration-300
`
export const DocAsideHeader = tw.span`
    mt-2
    
    text-1
    text-primary
    dark:text-dprimary
`
export const DocAsideLink = tw.a`
    px-2
    
    text-[0.9em]
    text-[#2a75e9]
    dark:text-dsecondary
    
    hover:text-[#289aff]
    hover:dark:text-[#289aff]
    hover:no-underline
    
    duration-300
`

//////////////////////////////////////////////////////
///  DocContainer  Component
//////////////////////////////////////////////////////
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
    overflow-hidden
    text-ellipsis
    whitespace-pre

    font-semibold 
    text-2xl 
    md:text-3xl 
`

//////////////////////////////////////////////////////
///  Container  Component
//////////////////////////////////////////////////////
export const BaseContainer = tw.section`
    max-w-screen-xl
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
    text-xl
    md:text-2xl
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
    pb-20
`

export const MobileNav = tw.div`
    flex
`