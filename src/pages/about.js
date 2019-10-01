import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'

import aboutStyles from './css/about.module.css'

const AboutPage = () => {
    return (
        <Layout>
            <h2>Hi I'm JhOn.-</h2>
            <p className={aboutStyles.bio}><blockquote>I am a curious person in terms of new technologies for web development, mobile, quality and human experience, I am interested in graphic design, 3D animation, video production, music lover, photography and poetry.</blockquote></p>
            <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage