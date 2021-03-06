import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const Brokerage = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Brokerage with Local Demo Service</Title>
        <p>We help brands get their products into new stores and maintain consistent sales. Our team is on-site full time in grocery outlets building relationships with buyers and increasing sales for our brands. Naturally, buyers want to take on our product lines because our demo service has ensured sales to their stores; plus we only represent the highest quality brands. Local Demo Service only takes on a select few clients for Brokerage at a time, so your product needs to be the right fit to become part of our Brokerage Program. We service the Pac NW and the remaining US territories; and have relationships with retail, food service, and other accounts that would love to carry your brand!</p>
    <p> Interested in hearing Brokerage rates? Call us at 808-722-5492 or fill in the ‘Contact Form’ to the right and ask about our referral program! </p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Brokerage;
