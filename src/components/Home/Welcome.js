import React from 'react';
import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>Welcome</WelcomeTitle>
      <WelcomeText>Sustainable eating is the key to a healthy world. Local demo Service provides on-site marketing and sales for sustainable products at retail outlets across the U.S. including Hawaii, Idaho, Washington, California, New Mexico, and Colorado. If you are interested in converting shoppers into long term buyers of your sustainable healthy products, please contact us for more information!</WelcomeText>
    </WelcomeContainer>
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
  max-width: 34em;
  font-size: larger;
  font-weight: 300;
`

export default Welcome;