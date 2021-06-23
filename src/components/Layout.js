import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import DarkModeToggler from "./DarkModeToggler"
import ClientOnly from "./ClientOnly"
import Particles from 'react-particles-js';
import logo from '../images/aimilyLogo.svg'
const isActive =
  propsIfActive =>
  ({ isPartiallyCurrent, href, location }) => {
    if (isPartiallyCurrent) {
      if (href === "/" && location.pathname !== "/") {
        return null
      }

      return propsIfActive
    }

    return null
  }

const MenuLink = props => (
  <Link
    to={props.to}
    css={css`
      text-decoration: none;
      color: var(--menuLink);
      transition: opacity 0.2s ease-out;
      opacity: 60%;
      &:hover {
        opacity: 100%;
        text-decoration: none;
      }
      & + & {
        margin-top: ${rhythm(1)};
      }

      @media (min-width: 650px) {
        & + & {
          margin-top: 0;
          margin-left: ${rhythm(1)};
        }
      }
    `}
    getProps={isActive({ style: { opacity: 1 } })}
  >
    {props.children}
  </Link>
)

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={css`
        color: var(--textNormal);
        padding: ${rhythm(2)} ${rhythm(1)};
        margin: 0;
         width:100%;
        
         
        transition: "color 2s ease-out, background 2s ease-out";
      `}
    >
      <header className="headerOfAllPages" css={css`
      position:relative;
           z-index: 10
          `}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-bottom: ${rhythm(2)};

            @media (min-width: 650px) {
              flex-direction: row;
              margin-bottom: ${rhythm(1 / 2)};
            }
          `}
        >
          <Link
            to="/"
            css={css`
              width: 100%;
              margin-bottom: ${rhythm(2)};
              text-align: center;

              @media (min-width: 650px) {
                width: unset;
                margin-bottom: 0;
                text-align: unset;
              }
            `}
          >
           {/**
            * <h2
              css={css`
                display: inline-block;
                font-style: normal;
                margin-bottom: 0;
                color: var(--websiteTitle);
              `}
            >
            
             data.site.siteMetadata.title
            </h2>
            */} 
            <img src={logo}/>
          </Link>
          <nav
            css={css`
              display: flex;
              flex-direction: column;
              margin-left: 0;
              align-items: center;

              @media (min-width: 650px) {
                margin-left: auto;
                flex-direction: row;
              }
            `}
          >
             <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/blog/">Blog</MenuLink>
            <MenuLink to="/">Team</MenuLink>
          </nav>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: row-reverse;
            margin-bottom: ${rhythm(3)};
            justify-content: center;
           
            @media (min-width: 650px) {
              justify-content: unset;
            }
          `}
        >
          <ClientOnly
            css={css`
              height: 24px;
            `}
          >
            <DarkModeToggler />
          </ClientOnly>
        </div>
      </header>
      <div  css={css`
      position:relative;
           z-index: 10
          `}>{children}</div>
          
      <Particles params={{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 224.28415972354892,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}/>
    </div>
  )
}
