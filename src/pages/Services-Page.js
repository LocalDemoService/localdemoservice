import React from "react";
import Img from 'gatsby-image'
import styled from 'styled-components'
import { SubpageWrapper, MainColumn, SideColumn, Title, Row, colors, mq } from "../components/styled/common";
import Contact from "../components/Forms/Contact";
import Card from "../components/Team/Card";
import Services, { services } from '../components/Home/Services'

const Service = ({ service, image }) => {
  return (
    <CardContainer>
      <Img sizes={image} />
      <Name>{service.name}</Name>

    </CardContainer>
  )
}

const ServicesPage = ({ data }) => {
  console.log(data)
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
  width: 65%;
  
  @media (max-width: ${mq.large}px) {
    flex-direction: column;
  }
`;

const Image = styled(Img) `
  width: 200px;
  border-radius: 5px;
  margin: 10px 10px;

  @media (max-width: ${mq.small}px) {
    width: 150px;
  }
`;

const TextContainer = styled.div`
  padding-left: 10px;
`

const Name = styled.div`
  flex: 1;
  font-size: 1.25rem;
`;

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
