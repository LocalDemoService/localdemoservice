import React from "react";
import { SubpageWrapper, MainColumn, SideColumn, Title } from "../components/styled/common";
import Contact from "../components/Forms/Contact";
import Card from "../components/Team/Card";

const teamMembers = [
  {
    name: "Matthew Kubik",
    role: "Owner",
    bio: "Do ex quis ut fugiat irure consequat consequat commodo consectetur consectetur ut ex occaecat in. Eu occaecat nulla commodo duis velit aute minim. Esse est sint incididunt deserunt quis magna adipisicing esse do consequat eu commodo esse. Qui proident velit officia veniam velit elit anim sit commodo consectetur.",
    image: "https://placeimg.com/150/150/people"
  }
];

const Team = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Meet the Team</Title>
        {teamMembers.map(i => <Card person={i} />)}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Team;
