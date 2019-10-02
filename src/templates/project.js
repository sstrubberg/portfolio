import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ProjectTemplate = ({ data, pageContext }) => {
  const { title } = data.contentfulProject

  // const previous = pageContext.prev
  // const next = pageContext.next

  return (
    <>
      <Layout>
        <div>{title}</div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

export default ProjectTemplate
