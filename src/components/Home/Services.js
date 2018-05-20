import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { HomePageWrapper, Border, SLink, colors } from '../styled/common'

const services = [
  {
    name: 'Product Demonstration',
    image: 'demo',
    url: '/product-demonstration'
  },
  {
    name: 'Tandem Demos',
    image: 'shelves',
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

// margin-left: calc(50% - 50vw);
// margin-right: calc(50% - 50vw);


const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 50px 0;
`

const BackgroundContainer = styled.div`
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
`

const ServiceContainer = styled.div`
  width: 150px;
`

const ServiceTitle = styled.div`
  text-align: center;
  margin-top: 5px;  
`

export default Services