import React from "react";
import Img from 'gatsby-image'
import { SubpageWrapper, MainColumn, SideColumn, Title } from "../components/styled/common";
import Contact from "../components/Forms/Contact";
import Card from "../components/Team/Card";

const teamMembers = [
  {
    name: "Matthew Kubik",
    role: "Owner",
    bio: "Do ex quis ut fugiat irure consequat consequat commodo consectetur consectetur ut ex occaecat in. Eu occaecat nulla commodo duis velit aute minim. Esse est sint incididunt deserunt quis magna adipisicing esse do consequat eu commodo esse. Qui proident velit officia veniam velit elit anim sit commodo consectetur.",
    image: "matthew"
  },
  {
    name: "Nohea Jackson",
    role: "Product Demonstration",
    bio: "Maui, Hawaii",
    image: "nohea"
  },
  {
    name: "Carl Rodriguez",
    role: "Product Demonstration",
    bio: "Bay Area, California",
    image: "carl"
  },
  {
    name: "Ruth Stoddard",
    role: "Owner",
    bio: "Oahu, Hawaii",
    image: "ruth"
  }
];

const Team = ({ data }) => {
  console.log(data);
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
  }
`

export default Team;
