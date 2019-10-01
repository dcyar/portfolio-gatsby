import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts/Layout'

const NotFound = () => {
    return (
        <Layout>
            <h2>Page not found</h2>
            <p>
                <Link to='/'>Head home</Link>
            </p>
        </Layout>
    )
}

export default NotFound