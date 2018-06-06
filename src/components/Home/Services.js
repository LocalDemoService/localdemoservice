import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import { HomePageWrapper, Border, SLink, Title, mq } from '../styled/common'

export const services = [
  {
    name: 'Product Demonstration',
    text: 'At our demos we can sample out your products in stores. Increase sales, convert new customers, build relationships with buyers, merchandise your shelf space, attain photos, negotiate product shifts, and gain analytics through demo reports.',
    image: 'demo',
    url: '/product-demonstration'
  },
  {
    name: 'Tandem Demos',
    text: 'An affordable way to increase exposure and overall sales through shared demos.',
    image: 'yinYangCoffee',
    url: '/tandem-demos'
  },
  {
    name: 'Brokerage',
    text: 'Do you want to be in more stores? Buyers take our products because we ensure sales through demo support!',
    image: 'handshake',
    url: '/brokerage'
  },
  {
    name: 'Merchandising',
    text: 'Keep your displays looking professional! Send one of our specialists into the store(s) of your choice to stock the shelf, improve aesthetics, place orders, and report back on other details.',
    image: 'coffeeShelf',
    url: '/merchandising'
  },
  {
    name: 'Marketing & Sales Consultation',
    text: 'Looking for other ways to market and sell your brand? Contact us for all of your marketing needs!',
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
