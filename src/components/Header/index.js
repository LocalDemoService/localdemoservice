import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { HomePageWrapper, Border, colors } from '../../components/styled/common'


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
            opacity: 0.3,
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
                  <Link to='/'>Home</Link>
                  <Link to={'/about'}>About</Link>
                  <Link to={'/blog'}>Blog</Link>
                  <Link to={'/locations'}>Locations</Link>
                  <Link to={'/team'}>Meet The Team</Link>
                  <Link to={'/careers'}>Careers</Link>
                  <Link to={'/contact'}>Contact Us</Link>
                </MainNav>
              </HomePageWrapper>
            </Border>
          </TopMargin>
        </HeaderBody>
      </HeaderContainer>

    );
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

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      border-bottom: 1px solid #999;
    }
  }
`

const TopMargin = styled.div`
  margin-top: ${props => props.marginTop}px;
`

export default Header