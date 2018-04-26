import React, { Fragment } from 'react';
import styled from 'styled-components'
import Img from 'gatsby-image'

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
  console.log(data)
  return (
    <BackgroundContainer style={{ backgroundImage: `url(${data.bgImage.sizes.src})` }}>
      <ServicesContainer>
        {services.map(service => (
          <Service
            key={service.name + service.image}
            name={service.name}
            image={data[service.image]} />
        ))}
      </ServicesContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  height: 300px;
`

const ServicesContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ServiceContainer = styled.div`
  width: 150px;
`

const ServiceTitle = styled.div`
  text-align: center;
  margin-top: 5px;  
`

export default Services;