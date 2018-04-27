import React from 'react';
import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeTitle>Welcome</WelcomeTitle>
      <WelcomeText>Sustainable eating is the key to a healthy world. Local demo Service provides on-site marketing and sales for sustainable products at retail outlets across the U.S. including Hawaii, Idaho, Washington, and California. If your products are sustainable and healthy, and yoa are interested in marketing; please contact us for more information!</WelcomeText>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const WelcomeTitle = styled.h2`
  font-weight: lighter;
  font-size: 3.25rem;
`

const WelcomeText = styled.div`  
  text-align: center;
  width: 34em;
`

export default Welcome;