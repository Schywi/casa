import React from "react"
import Layout from "../components/Layout"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import { siteMetadata } from "../../gatsby-config"
import {
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,

} from "react-share";

import {
  FacebookShareCount,
  FacebookIcon,
  LineIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export default function Blog({ data, location }) {

  const showShareButton = (id) => {
   const shareDiv = document.getElementById(`${id}`)
   shareDiv.style.display = "flex"
  }
  const hideShowButton = (id) => {
    const shareDiv = document.getElementById(`${id}`)
    shareDiv.style.display = "none"
   }
  return (
    <Layout>
      <SEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        pathname={location.pathname}
      />
      <main  className="BlogPageContainer">
     
        
 
     
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article onMouseEnter={()=> {
            const id = node.frontmatter.title
            showShareButton(id)
          }}
          onMouseLeave={
            () => {
              const id = node.frontmatter.title
              hideShowButton(id)
            }
          }
            key={node.fields.slug}
            css={css`
              margin-bottom: ${rhythm(2)};
            `}
          >
            <div id={node.frontmatter.title} className="share">
             <span>Share post:</span>

              <div className="iconsDiv">
                   <FacebookIcon size={40} />
                   <LineIcon size={40} />
                   <LinkedinIcon size={40} />
                   <TwitterIcon size={40} />
              </div>
             
            </div>
            <div className="wrapTextBlog">
            <header>
             
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
            </div>
          
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
