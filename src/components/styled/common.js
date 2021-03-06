import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export const colors = (alpha = 1) => (
  {
    green: `rgba(153, 202, 59, ${alpha})`,
    blue: `rgba(134, 200, 232, ${alpha})`,
    brown: `rgba(134, 98, 46, ${alpha})`,
    black: `rgba(51, 51, 51, ${alpha})`,
    transparent: `rgba(0, 0, 0, 0)`
  }
)

export const mq = {
  small: 489,
  medium: 700,
  large: 960
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomePageWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const MultiColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${mq.large}px;

  @media (max-width: ${mq.small}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainColumn = styled.div`
  flex: 4;
  margin-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 8rem - 699px);
  p, small {
    width: 70%;
  }
  ul {
    width: 70%;
  }
  
  @media (max-width: ${mq.small}px) {
    padding-bottom: 15px;
  }
`;

export const SideColumn = styled.div`
  flex: 1;
  padding-top: 50px;

  @media (max-width: ${mq.small}px) {
    padding: 0;
  }
`;

export const SubpageWrapper = props => <MultiColumnWrapper {...props} />;

export const BorderTop = styled.div`
  border-top: 4px solid ${props => props.color};
`;

export const BorderBottom = styled.div`
  border-bottom: 4px solid ${props => props.color};
`;

export const Border = ({ topColor, bottomColor, children }) => (
  <div>
    <BorderTop color={topColor} />
    {children}
    <BorderBottom color={bottomColor} />
  </div>
);

export const SLink = styled(Link) `
  color: ${colors().black};
  text-decoration: none;

  &:hover {
    color: ${colors().blue};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 5px 15px;
  background-color: ${colors(0.5).green};

  display: inline-block;
  border: none;
  text-decoration: none;
  color: ${colors().black};
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  button:hover,
  button:focus {
    background: ${colors().blue};
  }

  button:focus {
    outline: 1px solid #000;
    outline-offset: -4px;
  }
  
  button:active {
    transform: scale(0.99);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: 25px;
  align-self: center;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 0;
  align-items: flex-start;
  label {
    font-size: 1rem;
  }

  input, textarea {
    font-size: 1rem;
    width: 100%;
  }

  label {
    align-self: flex-start;
    padding: 5px 0;
  }

  button {
    align-self: flex-start;
  }
`;

const InputFileStyle = styled.input`
  font-size: 1rem;
  padding: 5px 15px;
  margin: 5px auto;
  background-color: ${colors(0.5).green};
`;

export const InputStyle = props => <InputFileStyle>{props.children}</InputFileStyle>;
