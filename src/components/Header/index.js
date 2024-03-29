import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.css'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    siteUrl
                }
            }
        }
    `)
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to='/' className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
            </h1>
            <ul className={headerStyles.navList}>
                <li><Link to='/' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></li>
                <li><Link to='/about' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link></li>
                <li><Link to='/projects' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Projects</Link></li>
                <li><Link to='/blog' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
                <li><Link to='/contact' className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header