import React from "react";
import styled from "styled-components";
import { colors, Row, Column } from "../styled/common";

const Card = ({ person }) => {
  return (
    <CardContainer>
      <Image src={person.image} alt="Placeholder" />
      <Column>
        <Name>{person.name}</Name>
        <div>{person.role}</div>
        <hr />
        <div>{person.bio}</div>
      </Column>
    </CardContainer>
  );
};

const CardContainer = styled(Row)`
  margin: 15px 50px;
  padding: 15px 25px;
  border: 3px solid ${colors(0.1).black};
  border-radius: 5px;
`;

const Image = styled.img`
  width: 150px;
  padding: 15px;
  border-radius: 20px;
`;

const Name = styled.div`
  font-size: 1.15rem;
`;

export default Card;
