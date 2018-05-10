import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { HomePageWrapper, Border } from '../styled/common'

const services = [
  {
    name: 'Product Demonstration',
    image: 'demo'
  },
  {
    name: 'Brokerage',
    image: 'handshake'
  },
  {
    name: 'Product Shifts',
    image: 'shelves'
  },
  {
    name: 'Merchandising',
    image: 'coffeeShelf'
  },
  {
    name: 'Marketing & Sales Consultation',
    image: 'marketing'
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
    <Border topColor={'#336699ff'} bottomColor={'#6dc8bf'}>
      <BackgroundContainer style={{ backgroundImage: `url(${data.bgImage.sizes.src})` }}>
        <HomePageWrapper>
          <ServicesContainer>
            {services.map(service => (
              <Service
                key={service.name + service.image}
                name={service.name}
                image={data[service.image]} />
            ))}
          </ServicesContainer>
        </HomePageWrapper>
      </BackgroundContainer>
    </Border>
  )
}

// margin-left: calc(50% - 50vw);
// margin-right: calc(50% - 50vw);
const BackgroundContainer = styled.div`  
`

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 50px 0;
`

const ServiceContainer = styled.div`
  width: 150px;
`

const ServiceTitle = styled.div`
  text-align: center;
  margin-top: 5px;  
`

export default Services