import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const Marketing = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Marketing with Local Demo Service</Title>
        <p>Looking for other ways to market and sell your brand? We offer full-service marketing through Local Demo Service and/or third party partnerships. Contact us for all of your marketing needs, including On-site representation, brokerage, branding, graphic design, digital, etc. for recommendations from experts!</p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Marketing;