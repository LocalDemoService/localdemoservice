import React from "react";
import Img from 'gatsby-image'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { SubpageWrapper, MainColumn, SideColumn, Title, Row, Column, SLink, colors, mq } from "../components/styled/common";
import Contact from "../components/Forms/Contact";
import Card from "../components/Team/Card";
import Services, { services } from '../components/Home/Services'

const Service = ({ service, image }) => {
  console.log(image)
  return (
    <CardContainer>
      <SLink to={service.url}><Image sizes={image.sizes} /></SLink>
      <TextContainer>
        <SLink to={service.url}>
          <Name>{service.name}</Name>
        </SLink>
        <Text>{service.text}</Text>
      </TextContainer>
    </CardContainer>
  )
}

const ServicesPage = ({ data }) => {
  return (
    <SubpageWrapper>
      <MainColumn>
        {services.map(service => (
          <Service service={service} image={data[service.image]} key={service.url} />
        ))}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const CardContainer = styled(Row) `
  margin: 15px 50px;
  padding: 15px 25px;
  border: 3px solid ${colors(0.1).black};
  border-radius: 2px;
  width: 65%;
  flex-direction: row;
  
  @media (max-width: ${mq.large}px) {
    flex-direction: column;
  }
`;

const Image = styled(Img) `
  width: 150px;
  border-radius: 5px;
  margin: 10px 10px;

  @media (max-width: ${mq.small}px) {
    margin: 10px auto;
  }
`;

const TextContainer = styled(Column) `
  padding-left: 50px;
  max-width: 65%;
  align-self: center;
`

const Name = styled.div`
  font-size: 1.25rem;
`;

const Text = styled.p`

`

const Role = styled.div`
  font-style: italic;
  font-size: 1.15rem;
`

const Bio = styled.div`
`

export const query = graphql`
  query ServicesQuery {
    demo: imageSharp(id: { regex: "/demo.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    handshake: imageSharp(id: { regex: "/handshake.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    shelves: imageSharp(id: { regex: "/shelves.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    coffeeShelf: imageSharp(id: { regex: "/coffeeShelf.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    marketing: imageSharp(id: { regex: "/marketing.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    yinYangCoffee: imageSharp(id: { regex: "/yinyangcoffee.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default ServicesPage;
