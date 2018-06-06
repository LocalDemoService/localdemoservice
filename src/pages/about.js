import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'
import { SubpageWrapper, MainColumn, SideColumn, Title, SLink, colors } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

const About = () => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <Title>About Local Demo Service</Title>
        <p>
          Local Demo Service started in November of 2015 serving local Hawaiian grown beverages at farmers markets to support inter-island sustainability. Hawaii imports approximately 90% of all consumable goods so our mission was to get local products into local peoples hands at all costs. Our local Hawaiian producers expressed a need for demos at grocery outlets so we began sampling Kau coffee, Big Island macadamia nuts, and other local Hawaiian products at Whole Foods and other health-food stores. 
    </p>
    <p>
    Entering the grocery industry, we found a lack of sustainable trends: Food travels
          <SourceLink href='https://cuesa.org/learn/how-far-does-your-food-travel-get-your-plate'> approximately 1500 miles from farm to plate</SourceLink>
          , Organic food sales only account for a
          <SourceLink href='https://www.ota.com/resources/market-analysis'> mere 5.3% of the food sales</SourceLink> in the United States as of 2017
          , the <SourceLink href='https://www.theguardian.com/environment/2017/mar/13/waste-plastic-food-packaging-recycling-throwaway-culture-dave-hall'> vast majority of food packaging is not recycled</SourceLink>
          , etc. </p>
    <p>Our findings led us to our purpose: to support sustainably-focused products to build a more sustainable and forward thinking food economy. Our goal is to represent any of the following types of products: Our goal is to represent any of the following types of products: local, Organic, recycled, charity-based, healthy, Fair-Trade, and/or other sustainably focused products.
        </p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const SourceLink = styled.a`
  color: ${colors().blue}
`

export default About;
