import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const Merchandising = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Merchandising with Local Demo Service</Title>
        <p>Send one of our specialists into the store(s) of your choice to stock the shelf, make the display look aesthetically pleasing, and report back any products that need ordering to you and to the buyer. Merchandising is a great opportunity to make sure your product is stocked and reordered in a timely manner: buyers have thousands of products to maintain and yours may not be on their radar. By sending one of our merchandisers to the store you will ensure sales, prevent lost accounts, build relationships with buyers in-person, gain insights into improvements that can be made, and potentially organize product shifts.</p>
        <p>Interested in hearing Merchandising rates? Call us at 808-722-5492 or fill in the ‘Contact Form’ to the right and ask about our Merchandising program!</p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default Merchandising;
