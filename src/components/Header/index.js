import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { HomePageWrapper, Border, colors } from '../../components/styled/common'

const nav = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Locations',
    path: '/locations'
  },
  {
    name: 'Meet The Team',
    path: '/team'
  },
  {
    name: 'Careers',
    path: '/careers'
  },
  {
    name: 'Contact',
    path: '/contact'
  },
]

class Header extends Component {

  render() {
    const { data } = this.props
    return (
      <HeaderContainer
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <Img
          sizes={data.background.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            opacity: 0.7,
          }} />
        <HeaderBody>
          <h1>
            <Link
              to="/"
              style={{
                color: '#fff',
                textShadow: `1px 1px 1px #999, 
                3px 3px 5px #777`,
                textDecoration: 'none',
                letterSpacing: '1rem',
                fontWeight: 100
              }} >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <TopMargin marginTop={75}>
            <Border
              topColor={`${colors(0.5).black}`}
              bottomColor={`${colors(0.5).black}`} >
              <HomePageWrapper>
                <MainNav>
                  {nav.map(n => (
                    <Link
                      key={n.path}
                      exact
                      activeStyle={{ borderBottom: `1px solid ${colors(1).green}` }}
                      to={n.path}>
                      {n.name}
                    </Link>
                  ))}
                </MainNav>
              </HomePageWrapper>
            </Border>
          </TopMargin>
        </HeaderBody>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  background-color: #333;
  padding-bottom: 20px;
  h1 {
    margin: 0;
    padding-top: 50px;
    text-align: center;
    font-weight: normal;
  }
`

const HeaderBody = styled.div`
  margin: 0 auto;
  position: relative;
  margin-bottom: 75px;
`


const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 25px 0;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      border-bottom: 1px solid #999;
    }
    &:active {
      color: #336699;
      border-bottom: 1px solid #999;
    }
  }
`

const TopMargin = styled.div`
  margin-top: ${props => props.marginTop}px;
`

export default Header