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
    name: "Matt Lonestar",
    role: "Director of Operations",
    bio: "Northern Idaho, Eastern Washington",
    image: "lonestar"
  },
  {
    name: "Will Gregory",
    role: "Director of Operations",
    bio: "Northern Idaho, Eastern Washington",
    image: "gregory"
  },
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
    lonestar: imageSharp(id: { regex: "/lonestar.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
    gregory: imageSharp(id: { regex: "/willGregory.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default Team;
