import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'


class Header extends Component {

  render() {
    const { data, location } = this.props
    return (
      <HeaderContainer
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <HeaderBody>
          <h1>
            <Link
              to="/"
              style={{
                color: '#fff',
                textShadow: `1px 1px 1px #999, 
                3px 3px 5px #777`,
                textDecoration: 'none',
                letterSpacing: '1rem'
              }} >
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </HeaderBody>
        <Img
          sizes={data.background.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            opacity: 0.3
          }} />
        <MainNav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/locations'}>Locations</Link></li>
            <li><Link to={'/team'}>Meet The Team</Link></li>
            <li><Link to={'/careers'}>Careers</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </MainNav>
      </HeaderContainer>

    );
  }
}

const HeaderContainer = styled.div.attrs({ className: 'avenir' }) `
  height: 300px;
  margin-top: -25px;
  background-color: #333;

  h1 {
    padding-top: 50px;
    text-align: center;
    font-weight: normal;
    font-size: 3rem;
    color: #336699;
  }
`

const MainNav = styled.nav`
  margin-top: 50px;
  padding: 10px 0;
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    li {
      z-index: 5;
      margin-left: 10px;

      a {
            text-decoration: none;
        color: #fff;

        &:hover {
            border-bottom: 1px solid #999;
        }
      }
    }
  }
`

const HeaderBody = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`


export default Header