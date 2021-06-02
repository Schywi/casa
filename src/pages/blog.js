import React from "react"
import Layout from "../components/Layout"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import { siteMetadata } from "../../gatsby-config"

export default function Blog({ data, location }) {
  return (
    <Layout>
      <SEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        pathname={location.pathname}
      />
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article
            key={node.fields.slug}
            css={css`
              margin-bottom: ${rhythm(2)};
            `}
          >
            <header>
              {node.fields.slug}
              <Link
                to={`/blog${node.fields.slug}`}
                css={css`
                  text-decoration: none;
                  color: inherit;

                  &:hover {
                    text-decoration-color: var(--textTitle);
                  }
                `}
              >
                <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                </h3>
              </Link>
              <small>{node.frontmatter.date}</small>
            </header>
            <p>{node.frontmatter.description}</p>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
