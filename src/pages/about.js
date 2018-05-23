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
          Local Demo Service started in November of 2015 serving local Hawaiian grown beverages at farmers markets to support inter-island sustainability. Hawaii imports approximately 90% of all consumable goods so our mission was to get local products into local peoples hands at all costs. Our local Hawaiian producers expressed a need for demos at grocery outlets, so we began sampling Kau coffee, Big Island Macadamia nuts, and other local Hawaiian products at Whole Foods and other health food stores. Entering the grocery industry, we found a lack of sustainable trends: Food travels approximately 1500 miles from farm to plate
          <SourceLink to='https://cuesa.org/learn/how-far-does-your-food-travel-get-your-plate'> (Source)</SourceLink>
          , Organic food sales only account for a mere 5.3% of the food sales in the United States as of 2017
          <SourceLink to='https://www.ota.com/resources/market-analysis'> (Source)</SourceLink>
          , the vast majority of food packaging is not recycled
          <SourceLink to='https://www.theguardian.com/environment/2017/mar/13/waste-plastic-food-packaging-recycling-throwaway-culture-dave-hall'> (Source)</SourceLink>
          , etc. Our findings lead us to our purpose: to support local, Organic, recycled, charity based, healthy, and/or other sustainably focused products to build a more sustainable and forward thinking food economy.
        </p>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const SourceLink = styled(SLink) `
  color: ${colors().blue}
`

export default About;