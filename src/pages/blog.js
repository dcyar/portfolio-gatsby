import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Head from '../components/Head'

import blogStyles from './css/blog.module.css'

const BlogPage = ({data}) => {
    return (
        <Layout>
            <Head title='Blog' />
            <h2>Blog.-</h2>
            <p>This is my website blog.</p>
            <ol className={blogStyles.posts}>
                {
                    data.allMarkdownRemark.edges.map((edge, index) => (
                        <li className={blogStyles.post} key={index}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h3>
                                {edge.node.frontmatter.title}
                            </h3>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    ))
                }
            </ol>
        </Layout>
    )
}

export const data = graphql`
query {
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {group: {eq: "blog"}}}) {
        edges {
            node {
                frontmatter {
                    title,
                    date
                }
                fields {
                    slug
                }
            }
        }
    }
}
`
export default BlogPage