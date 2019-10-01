import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Head from '../components/Head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <div>
                <h2>Hello.-</h2>
                <h3>I'm Jhon, a full-stack developer living in beautiful Peru.</h3>
                <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
            </div>
        </Layout>
    )
}

export default IndexPage