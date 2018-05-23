import React from 'react';
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const services = [
  'Increased sales',
  'Conversion of new customers',
  'Relationship building with grocery buyers and team',
  'Merchandising included in every demo',
  'Photos of product on shelf',
  'Photos of demo specialist at event',
  'Potential product shift',
  'Detailed report explaining customer and staff feedback, sales results, plus additional information acquired at the demo to help you build your brand!'
]

const ProductDemonstration = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>Product Demonstration with Local Demo Service</Title>
        <p>Our specialty is representing you where you can’t be. Local Demo Service Demo Specialists attend given locations of your choice, set up an aesthetically pleasing table display with your brand, catch shoppers attention, sample out and educate consumers on why your products are important, and ultimately convert new customers to buyers of your brand. The benefits of product demonstration include:</p>
        <ul>
          {services.map(service => <li key={service}>{service}</li>)}
        </ul>
        <p>Interested in hearing more about Product Demonstration? Fill in the ‘Contact Form’ to the right and ask about our Demo program!</p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

export default ProductDemonstration;