import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import 'typeface-lato'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { colors } from '../components/styled/common'
import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `${data.site.siteMetadata.description}` },
        { name: 'keywords', content: 'Local Demo Service, Product Demos In Your Store' },
      ]}
    />
    <Header data={data} location={location} />
    <Content>
      {children()}
    </Content>
    <Footer logoSmall={data.logoSmall} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const Content = styled.div`
  
`

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title 
      description
    }
  }
  background: imageSharp(id: { regex: "/background.jpg/" }) {
    sizes(maxWidth: 1280, duotone: { highlight: "#86C8E8", shadow: "#99CA55", opacity: 50 }) {
      ...GatsbyImageSharpSizes
    }
  },
  background2: imageSharp(id: { regex: "/background2.jpg/" }) {
    sizes(maxWidth: 1280, duotone: { highlight: "#86C8E8", shadow: "#99CA55", opacity: 50 }) {
      ...GatsbyImageSharpSizes
    }
  },
  background3: imageSharp(id: { regex: "/background3.jpg/" }) {
    sizes(maxWidth: 1280, duotone: { highlight: "#86C8E8", shadow: "#99CA55", opacity: 50 }) {
      ...GatsbyImageSharpSizes
    }
  },
  background4: imageSharp(id: { regex: "/background4.jpg/" }) {
    sizes(maxWidth: 1280, duotone: { highlight: "#86C8E8", shadow: "#99CA55", opacity: 50 }) {
      ...GatsbyImageSharpSizes
    }
  },
  logo: imageSharp(id: { regex: "/logo.png/" }) {
    sizes(maxWidth: 600) {
      ...GatsbyImageSharpSizes
    }
  }
  logoSmall: imageSharp(id: { regex: "/logo-small.png/" }) {
    sizes(maxWidth: 400) {
      ...GatsbyImageSharpSizes
    }
  }
}
`

export default TemplateWrapper
