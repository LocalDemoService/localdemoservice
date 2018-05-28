import React from 'react';
import styled from 'styled-components'
import { SubpageWrapper, MainColumn, SideColumn, Title, Column, colors } from '../components/styled/common'
import Contact from '../components/Forms/Contact'
import rustys from '../images/rustys-hawaiian.png'

const TandemDemos = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Tandem Demos with Local Demo Service</Title>
        <p>An affordable way to increase exposure and overall sales is through our tandem demo system. We sample and sell your products alongside another tandem partner. Pairings are complementary; for example Chips & Salsa, Coffee & Chocolate, Jam & Baked Goods, etc.</p>
        <p>Interested in hearing Tandem Demo Rates? Fill in the ‘Contact Form’ to the right and ask about our referral program!</p>
        <Aside>
          <img src={rustys} style={{ width: 150 }} />
          <small>Tandem demos at Whole Foods locations more than doubled sales of Rusty’s Hawaiian Coffee in under one year.</small>
        </Aside>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const Aside = styled(Column) `
  flex: 1;
  align-items: center;
  border-top: 1px solid ${colors(0.3).blue};
  margin-top: 10px;
  small {
    font-size: 0.85rem;
    width: 45%;
    margin-top: -50px;
    color: ${colors().blue}
  }
  img {
    margin-top: -30px;
  }

`

export default TandemDemos;