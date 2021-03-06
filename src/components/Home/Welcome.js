import React from 'react';
import styled from 'styled-components'
import { mq, Border, colors } from '../styled/common'

const Welcome = () => {
  return (
    <Border topColor={colors(.5).green} bottomColor={colors(.5).blue}>

      <WelcomeContainer>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <WelcomeText>Sustainability is the key to a healthy world. <br /> Local Demo Service provides on-site product demonstration, marketing, and sales for sustainable food, beverage, supplement, or topical products. Our goal is to represent local, Organic, sustainably-packaged, charity-based, healthy, Fair-Trade, and/or other sustainably-focused products. We serve Hawaii, Washington, Idaho, Montana, Oregon, Florida, and more areas. If you are interested in converting shoppers into long-term buyers of your sustainable products, please contact us for more information!</WelcomeText>
      </WelcomeContainer>
    </Border>
  );
};

const WelcomeContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const WelcomeTitle = styled.h2`
  font-weight: 300;
  font-size: 3.25rem;
`

const WelcomeText = styled.div`  
  text-align: center;
  max-width: 34rem;
  font-size: larger;
  font-weight: 300;
  margin-top: -25px;

  @media (max-width: ${mq.small}px) {
    max-width: 20rem;
  }
`

export default Welcome;
