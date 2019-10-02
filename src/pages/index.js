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
                <p>Web developer, with knowledge in Frontend, Backend, passionate about new technologies on the internet, music lover and explorer of the limits of the unknown.</p>
                <hr />
                <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
            </div>
        </Layout>
    )
}

export default IndexPage