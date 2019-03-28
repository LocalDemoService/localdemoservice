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
    bio: "Matt has 15 years in fine-food retail and restaurant management. Matt has a wife and 6 children who strive to live in the conviction of a sustainable life. Matt manages the Pacific North West and oversees all regional managers and the development of Local Demo Services core team members. You might catch him demoing or training one of our Brand Ambassadors in Northern Idaho or Eastern Washington!",
    image: "lonestar"
  },
  {
    name: "Will Gregory",
    role: "Director of Distribution",
    bio: "Will is a retired MRI Specialist ready to upgrade quality food and beverage distribution to F&B startups. Will is hapilly married, a Father and Step Father, and Matthew Kubick's Father-in-Law. He covers Northern Idaho, Western Montana, and Eastern Washington with demos and distribution. When he is not building his distribution unit, he is either snowboarding black daimonds at Schweitzer Mountain, writing and recording music, or spending time with his family.",
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
