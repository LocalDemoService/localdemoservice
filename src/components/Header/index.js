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
      backgroundImage: { image: 'background' },
      backgroundImages: [
        {
          image: 'background'
        },
        {
          image: 'background2',
        },
        {
          image: 'background3',
        },
        {
          image: 'background4',
        }
      ]
    }
  }

  componentDidMount() {
    this.rotateImage()
  }

  rotateImage = () => {
    const { backgroundImages } = this.state
    let currentImageIndex = 0;
    setInterval(() => {
      if (currentImageIndex >= this.state.backgroundImages.length) {
        currentImageIndex = 0
      }
      this.setState(state => {
        return {
          ...state,
          backgroundImage: backgroundImages[currentImageIndex],
        }
      }, () => ++currentImageIndex)
    }, 4000)
  }

  render() {
    const { data } = this.props
    const { backgroundImage } = this.state
    return (
      <HeaderContainer
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
        <BackgroundContainer
          backgroundImage={backgroundImage && data[backgroundImage.image].sizes.src}
          position={backgroundImage.position ? backgroundImage.position : 'center'} >
          <HeaderBody>
            <Link to={'/'}>
              <LogoContainer>
                <Image src={data.logo.sizes.src} />
              </LogoContainer>
            </Link>
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
  transition: background-image 1s ease-in-out;
  background: url(${props => props.backgroundImage}) no-repeat ${props => props.position} center;
  background-size: cover;
`

const HeaderBody = styled.div`
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
  padding-top: 50px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
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