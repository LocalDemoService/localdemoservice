import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { HomePageWrapper, Border, SLink, Title, colors, mq } from '../styled/common'

const services = [
  {
    name: 'Product Demonstration',
    image: 'demo',
    url: '/product-demonstration'
  },
  {
    name: 'Tandem Demos',
    image: 'yinYangCoffee',
    url: '/tandem-demos'
  },
  {
    name: 'Brokerage',
    image: 'handshake',
    url: '/brokerage'
  },
  {
    name: 'Merchandising',
    image: 'coffeeShelf',
    url: '/merchandising'
  },
  {
    name: 'Marketing & Sales Consultation',
    image: 'marketing',
    url: '/marketing'
  }
]

const Service = ({ name, image }) => {
  return (
    <ServiceContainer>
      <Img sizes={image.sizes} />
      <ServiceTitle>{name}</ServiceTitle>
    </ServiceContainer>
  )
}

const Services = ({ data }) => {
  return (
    <Border topColor={colors(.5).green} bottomColor={colors(.5).blue}>
      <BackgroundContainer backgroundImage={data.bgImage.sizes.src}>
        <HomePageWrapper>
          <STitle>Our Services</STitle>
          <ServicesContainer>
            {services.map(service => (
              <SLink to={service.url} key={service.name + service.image}>
                <Service
                  name={service.name}
                  image={data[service.image]} />
              </SLink>
            ))}
          </ServicesContainer>
        </HomePageWrapper>
      </BackgroundContainer>
    </Border>
  )
}

const STitle = styled(Title) `
  padding-top: 25px;
`

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 1rem;
  align-items: center;

  img {
    border-radius: 5px;
  }

  @media (max-width: ${mq.small}px) {
    flex-direction: column;
    flex-wrap: no-wrap;
    font-size: 1.25rem;
  }
`

const BackgroundContainer = styled.div`
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
`

const ServiceContainer = styled.div`
  width: 150px;
  padding: 10px;
`

const ServiceTitle = styled.div`
  text-align: center;
  margin-top: 5px;
  min-height: 50px;
`

export default Services