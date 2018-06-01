import React from 'react'
import Link from 'gatsby-link'
import Services from '../components/Home/Services'
import Welcome from '../components/Home/Welcome'
import Partners from '../components/Home/Partners'
import { HomePageWrapper } from '../components/styled/common'

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <Welcome />
      <Services data={data} />
      <Partners data={data} />
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`
  query SiteMetadata {
    site {
      siteMetadata {
        title
        description
      }
    }
    demo: imageSharp(id: { regex: "/demo.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    handshake: imageSharp(id: { regex: "/handshake.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    shelves: imageSharp(id: { regex: "/shelves.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    coffeeShelf: imageSharp(id: { regex: "/coffeeShelf.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    marketing: imageSharp(id: { regex: "/marketing.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    yinYangCoffee: imageSharp(id: { regex: "/yinyangcoffee.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    bgImage: imageSharp(id: { regex: "/bg-tile.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`