import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Head from '../components/Head'

import projectsStyles from './css/projects.module.css'

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <Head title='Projects' /> 
            <h2>Projects.-</h2>
            <p>This is my projects page.</p>
            <div className={projectsStyles.posts}>
                {
                    data.allMarkdownRemark.edges.map((edge, index) => (
                        <div className={projectsStyles.post} key={index}>
                            <Link to={`/project/${edge.node.fields.slug}`}>
                                <p>
                                    {edge.node.frontmatter.date}
                                </p>
                                <h3>
                                    {edge.node.frontmatter.title}
                                </h3>
                                <p>
                                    {edge.node.frontmatter.tags}
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export const data = graphql`
query {
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {group: {eq: "project"}}}) {
        edges {
            node {
                frontmatter {
                    title,
                    date,
                    tags
                }
                fields {
                    slug
                }
            }
        }
    }
}
`

export default ProjectsPage