import React from "react";
import styled from "styled-components";
import Img from 'gatsby-image'
import { colors, Row, Column, mq } from "../styled/common";

const Card = ({ person, sizes }) => {
  return (
    <CardContainer>
      <Image sizes={sizes} alt="Placeholder" />
      <TextContainer>
        <Column>
          <Name>{person.name}</Name>
          <Role>{person.role}</Role>
          <hr />
          <Bio>{person.bio}</Bio>
        </Column>
      </TextContainer>
    </CardContainer>
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
  font-size: 1.25rem;
  font-weight: bold;
`;

const Role = styled.div`
  font-style: italic;
  font-size: 1.15rem;
`

const Bio = styled.div`
`

export default Card;
