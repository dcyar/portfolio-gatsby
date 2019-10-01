import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../assets/css/reset.css'
import ps from './layout.module.css'

const Layout = (props) => {
    return (
        <div className={ps.container}>
            <div className={ps.content}>
                <Header />
                
                {props.children}
            </div>            
            <Footer />
        </div>
    )
}

export default Layout
