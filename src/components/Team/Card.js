import React from "react";
import styled from "styled-components";
import Img from 'gatsby-image'
import { colors, Row, Column } from "../styled/common";

const Card = ({ person, sizes }) => {
  console.log(sizes.sizes);
  return (
    <CardContainer>
      <Image sizes={sizes} alt="Placeholder" />
      <Column>
        <Name>{person.name}</Name>
        <Role>{person.role}</Role>
        <hr />
        <div>{person.bio}</div>
      </Column>
    </CardContainer>
  );
};

const CardContainer = styled(Row) `
  margin: 15px 50px;
  padding: 15px 25px;
  border: 3px solid ${colors(0.1).black};
`;

const Image = styled(Img) `
  width: 200px;
  margin-right: 25px;
  border-radius: 5px;
`;

const Name = styled.div`
  font-size: 1.25rem;
`;

const Role = styled.div`
  font-style: italic;
  font-size: 1.15rem;
`

export default Card;
