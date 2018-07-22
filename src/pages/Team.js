import React from "react";
import Img from 'gatsby-image'
import { SubpageWrapper, MainColumn, SideColumn, Title } from "../components/styled/common";
import Contact from "../components/Forms/Contact";
import Card from "../components/Team/Card";

const teamMembers = [
  {
    name: "Matthew Kubick",
    role: "Founder and President of Local Demo Service",
    bio: "Matthew and his wife, Danielle, (Co-Founder and CCO) launched Local Demo Service in 2015. Their mission is to convert everyday shoppers into sustainable eaters to perpetuate a healthier population, environment, and world. Matthew has been involved in health and sustainability since his teenage years as an athletic coach, brand ambassador, salesman, and entrepeneur.",
    image: "matthew"
  },
  {
    name: "Ruth Stoddard",
    role: "Demo Specialist",
    bio: "Oahu, Hawaii",
    image: "ruth"
  },
  {
    name: "Nohea Jackson",
    role: "Demo Specialist",
    bio: "Maui, Hawaii",
    image: "nohea"
  },
  {
    name: "Carl Rodriguez",
    role: "Demo Specialist",
    bio: "Bay Area, California",
    image: "carl"
  },
  {
    name: "Katya Fulford",
    role: "Demo Specialist",
    bio: "Northern Idaho, Eastern Washington",
    image: "Katya"
  }
];

const Team = ({ data }) => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Meet the Team</Title>
        {teamMembers.map(i => <Card person={i} sizes={data[i.image].sizes} key={i.name} />)}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export const query = graphql`
  query TeamPhotos {
    matthew: imageSharp(id: { regex: "/matthew.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    nohea: imageSharp(id: { regex: "/nohea.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    carl: imageSharp(id: { regex: "/carl.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    ruth: imageSharp(id: { regex: "/ruth.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    Katya: imageSharp(id: { regex: "/katya.jpeg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default Team;
