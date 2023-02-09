import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

function Head() {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return (
        <>
            <meta property="og:url" content={`https://blocks.beneverman.com${asPath}`} />
            <meta property="og:title" content={frontMatter.title || "Ben's Blocks"} />
            <meta property="og:description" content={frontMatter.description || 'Where I try help you build cooler stuff by sharing and documenting my code.'} />
            <link rel="shortcut icon" href="https://www.beneverman.com/favicons/mind-map.ico" />
        </>
    )
}

const mylogo = () => {
    return (
        <div className='logo-container medium'>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2H8V7H13V2.5C13 2.22386 12.7761 2 12.5 2ZM13 8H8V13H12.5C12.7761 13 13 12.7761 13 12.5V8ZM7 7V2H2.5C2.22386 2 2 2.22386 2 2.5V7H7ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
            Ben&apos;s Blocks
        </div>
    )
}

const themeConfig = {
    logo: mylogo,
    head: Head,
    docsRepositoryBase: 'https://github.com/beverm2391/bens-blocks/blob/main/',
    project: {
        link: 'https://github.com/beverm2391/',
    },
    chat: {
        link: 'https://twitter.com/beverm2391',
        icon: <svg width="24" height="24" viewBox="0 0 248 204"><path fill="currentColor" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z" /></svg>,
    },
    sidebar: {
        defaultMenuCollapseLevel: 1
    }
}

export default themeConfig