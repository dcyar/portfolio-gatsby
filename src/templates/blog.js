import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layouts/Layout'
import Head from '../components/Head'

import blogStyles from './blog.module.css'

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Blog = ({ data }) => {
    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": (node) => {
    //             const alt = node.data.target.fields.title['en-US']
    //             const url = node.data.target.fields.file['en-US'].url

    //             return <img src={url} alt={alt} />
    //         }
    //     }
    // }
    return (
        // <Layout>
        //     <Head title={data.contentfulBlogPost.title} />
        //     <h2>{`${data.contentfulBlogPost.title}.-`}</h2>
        //     <p>{data.contentfulBlogPost.date}</p>
        //     {
        //         documentToReactComponents(data.contentfulBlogPost.body.json, options)
        //     }

        //     <Link to='/blog'>Back to blog</Link>
        // </Layout>
        <Layout>
            <Head title={data.markdownRemark.frontmatter.title} />
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>

            <Link to='/blog' className={blogStyles.backLink}>Back to blog</Link>
        </Layout>
    )
}

export default Blog


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
// export const data = graphql`
// query ($slug: String!) {
//     contentfulBlogPost (slug: {eq: $slug}) {
//         title
//         slug
//         publishedDate(formatString: "MMMM Do, YYYY")
//         body {
//             json
//         }
//     }
// }
// `