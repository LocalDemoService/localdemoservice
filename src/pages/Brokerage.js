import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const Brokerage = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Brokerage with Local Demo Service</Title>
        <p>We help products get into new stores. Our team is full time on-site in grocery outlets building relationships with buyers and increasing sales for our brands. Naturally buyers want to take on our product lines because our demos will ensure sales plus we only represent the highest quality items.</p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Brokerage;