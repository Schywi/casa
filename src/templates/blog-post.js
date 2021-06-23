import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { withPrefix } from "gatsby"

export default function BlogPost({ data, pageContext, location }) {
  const { previousPost, nextPost } = pageContext
  console.log("aa", pageContext)
  const post = data.markdownRemark
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  const hero = data.site.siteMetadata.siteUrl && withPrefix(image.src)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={image}
        pathname={location.pathname}
      />
      <main
      
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {/**
         * 
         *   <Link
          to="/blog/"
          css={css`
            margin-bottom: ${rhythm(1)};
          `}
        >
          ← Back
        </Link>
         */}
      
        <article  className="blogPostContainer">
          <div className="whoWrite">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png"/>
                <strong>Duis aute </strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          </div>
          <div className="postContainer">
          <div className="mainContentPost">
                <h1>{post.frontmatter.title}</h1>
              {/**
               *  <h2>{post.frontmatter.date}</h2>
               */} 
               
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <img src={hero}></img>
          </div>
         
          </div>
           </article>
      </main>
      <nav
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: ${rhythm(3)};
          margin-bottom: ${rhythm(3)};
        `}
      >
        <div>
          {previousPost && (
            <div className="wrapNextPost"> 
                  <Link
                    to={`/blog${previousPost.slug}`}
                    rel="prev"
                    style={{ marginRight: 20 }}

                  >
                    <div className="nextPost">
                        <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/141565/141565_00_2x.jpg"></img>
                        <span>{previousPost.title}</span>
                        <p>Apr 26, 2021 11:22 PM</p>
                      </div>
            
                  </Link>
                  <Link
                    to={`/blog${previousPost.slug}`}
                    rel="prev"
                    style={{ marginRight: 20 }}

                  >
                    <div className="nextPost">
                        <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/141565/141565_00_2x.jpg"></img>
                        <span>{previousPost.title}</span>
                        <p>Apr 26, 2021 11:22 PM</p>
                      </div>
            
                  </Link>
                  <Link
                    to={`/blog${previousPost.slug}`}
                    rel="prev"
                    style={{ marginRight: 20 }}

                  >
                    <div className="nextPost">
                        <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/141565/141565_00_2x.jpg"></img>
                        <span>{previousPost.title}</span>
                        <p>Apr 26, 2021 11:22 PM</p>
                      </div>
            
                  </Link>

            </div>
         
            
          )}
        </div>
        <div>
          {nextPost && (
            <Link to={`/blog${nextPost.slug}`} rel="next">
             
              <div className="nextPost">
                <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/141565/141565_00_2x.jpg"></img>
                <span>{nextPost.title}</span>
                <p></p>
              </div>
            </Link>
          )}
        </div>
      </nav>
      <Helmet>
        <script async>
          var childs = document.getElementsByClassName('task-list-item'); var
          parentElement = childs[0].parentNode;
          parentElement.classList.add('task-list');
        </script>
      </Helmet>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200, height: 630, jpegQuality: 100) {
              src
              height
              width
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
