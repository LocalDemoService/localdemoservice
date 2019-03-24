import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const Marketing = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Marketing with Local Demo Service</Title>
        <p>Looking for other ways to market and sell your brand? We offer full-service marketing through Local Demo Service and/or third party partnerships. We can help you with On-site representation, brokerage, branding, distribution, graphic design, digital, etc.</p>
    <p> Interested in hearing Marketing Consultation rates? Call us at 808-722-5492 or fill in the ‘Contact Form’ to the right and ask about our referral program! </p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Marketing;
