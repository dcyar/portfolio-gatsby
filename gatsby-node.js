const path = require('path')

// LOCAL MARKDOWN PAGES CONFIG
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark')
    {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project.js')
    const blogTemplate = path.resolve('./src/templates/blog.js')

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            group
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.frontmatter.group === 'project') {
            createPage({
                component: projectTemplate,
                path: `/project/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        } else if(edge.node.frontmatter.group === 'blog') {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })
}