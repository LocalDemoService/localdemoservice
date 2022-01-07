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
    name: "Will Edmondson",
    role: "Director of Sales",
    bio: "Will has always grown up around sustainable food, with his family switching to organic and healthy eating when he was 5. The family went on to open an all organic cafe and eatery, which Will managed for 5 years. You might catch him trekking around Sandpoint with his Wife and son. One day he hopes to start his own sustainable brand to help change the way people eat!",
    image: "gregory"
  },
  {
    name: "Kayla Erickson",
    role: "Seattle Regional Manager",
    bio: "Kayla was born and raised in Seattle by musician parents. Growing up in such a loud, creative household, being outgoing and talkative came naturally. Kayla has been in customer facing positions for over 13 years and management for 5 years. Kayla has grown very passionate about improving someone's day in small, memorable ways. When Kayla isn't demoing, she is usually out experiencing the Seattle jazz scene and supporting her very talented family and friends.",
    image: "erickson"
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
    erickson: imageSharp(id: { regex: "/erickson.jpg/" }) {
      sizes(maxWidth: 250, maxHeight: 250) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default Team;
