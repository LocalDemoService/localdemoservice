import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { HomePageWrapper, Border, colors, mq } from '../../components/styled/common'

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
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: '',
      backgroundImages: []
    }
  }

  componentDidMount() {
    this.setState(state => {
      return {
        ...state,
        backgroundImage: this.props.data.background.sizes.src
      }
    })
    this.rotateImage()
  }


  rotateImage = () => {
    setInterval(() => {
      this.state.backgroundImages.map(i => {
        this.setState(state => {
          return {
            ...state,
            backgroundImage: i
          }
        })
      })
    }, 1000)
  }

  render() {
    const { data } = this.props
    return (
      <HeaderContainer
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <BackgroundContainer backgroundImage={this.state.backgroundImage}>
          <HeaderBody>
            <Image sizes={data.logo.sizes} />
            <HeaderLink style={{ marginTop: -50 }}>
              <Link
                to="/"
                style={{
                  color: '#fff',
                  textShadow: `1px 1px 1px #ccc,
                  3px 3px 5px #777`,
                  fontSize: '3rem',
                  textDecoration: 'none',
                  letterSpacing: '1rem',
                  fontWeight: 300,
                }} >
                {data.site.siteMetadata.title}
              </Link>
            </HeaderLink>
            <div style={{ marginTop: 50, backgroundColor: `${colors(0.7).black}` }}>
              <Border
                topColor={`${colors(0.5).black}`}
                bottomColor={`${colors(0.5).black}`}
                style={{ backgroundColor: `#336699` }} >
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
            </div>
          </HeaderBody>
        </BackgroundContainer>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
  background-color: #333;
  h1 {
    margin: 0;
    padding-top: 50px;
    text-align: center;
    font-weight: normal;
  }
`

const BackgroundContainer = styled.div`  
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
`

const HeaderBody = styled.div`
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
  padding-top: 50px;
`

const Image = styled(Img) `
  width: 250px;
  margin: 0 auto;

  @media (max-width: ${mq.small}px) {
    width: 150px;
  }
`

const HeaderLink = styled.h1`
  padding: 0;
  margin-top: -50px;
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
    color: white;
    padding: 5px 1rem;

    &:hover {
      border-bottom: 1px solid ${colors(0.5).green};
    }
  }
`

const TopMargin = styled.div`
  margin-top: ${props => props.marginTop}px;
`

export default Header