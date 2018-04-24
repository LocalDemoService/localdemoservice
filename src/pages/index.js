import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'
import Services from '../components/Home/Services'


const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Services data={data} />
    </div>
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
      sizes(maxWidth: 250) {
        ...GatsbyImageSharpSizes
      }
    },
    handshake: imageSharp(id: { regex: "/handshake.jpg/" }) {
      sizes(maxWidth: 250) {
        ...GatsbyImageSharpSizes
      }
    },
    shelves: imageSharp(id: { regex: "/shelves.jpg/" }) {
      sizes(maxWidth: 250) {
        ...GatsbyImageSharpSizes
      }
    },
    coffeeShelf: imageSharp(id: { regex: "/coffeeShelf.jpg/" }) {
      sizes(maxWidth: 250) {
        ...GatsbyImageSharpSizes
      }
    },
    marketing: imageSharp(id: { regex: "/marketing.jpg/" }) {
      sizes(maxWidth: 250) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`