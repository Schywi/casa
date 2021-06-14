import React from "react"
import Layout from "../components/Layout"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import { siteMetadata } from "../../gatsby-config"
import Header from "../components/homepage/Header"
import How from "../components/homepage/How"
import BlogHome from "../components/homepage/Blog"
import Team from "../components/homepage/Team"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
export default function Blog({ data, location }) {


AOS.init();


  return (
    <Layout>
      <SEO
        title={siteMetadata.title}
        description={siteMetadata.description}
        pathname={location.pathname}
      />
      <Header/>
       <How/>
       <BlogHome/>
       <Team/>
    </Layout>
  )
}


