import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/Layout'
import Head from '../components/Head'

import blogStyles from './blog.module.css'

const Project = ({ data }) => {
    return (
        <Layout>
            <Head title={data.markdownRemark.frontmatter.title} />
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

            <Link to='/projects' className={blogStyles.backLink}>Back to projects</Link>
        </Layout>
    )
}

export const data = graphql`
query ($slug: String!) {
    markdownRemark (fields : {slug: {eq: $slug}}) {
        frontmatter {
            title
            date
        }
        html
    }
}
`
export default Project