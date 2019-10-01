import React from 'react'
import {  graphql, Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Head from '../components/Head'

import blogStyles from './css/blog.module.css'

const BlogPage = ({data}) => {
    return (
        // <Layout>
        //     <Head title='Blog' />
        //     <h2>Blog.-</h2>
        //     <p>This is my website blog.</p>
        //     <ol className={blogStyles.posts}>
        //         {
        //             data.allContentfulBlogPost.edges.map((edge, index) => (
        //                 <li className={blogStyles.post} key={index}>
        //                     <Link to={`/blog/${edge.node.slug}`}>
        //                     <h3>
        //                         {edge.node.title}
        //                     </h3>
        //                     <p>{edge.node.publishedDate}</p>
        //                     </Link>
        //                 </li>
        //             ))
        //         }
        //     </ol>
        // </Layout>
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
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}) {
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

// Contentful API
// export const data = graphql`
// query {
//     allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
//         edges {
//             node {
//                 title
//                 slug
//                 publishedDate(formatString: "MMMM Do, YYYY")
//             }
//         }
//     }
// }
// `

export default BlogPage