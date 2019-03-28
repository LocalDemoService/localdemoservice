import React from 'react';
import styled from 'styled-components'
import Partner from './Partner'
import ahualoa from '../../images/ahualoa.png'
import ohi from '../../images/ohi.png'
import mauiFruit from '../../images/mauiFruit.png'
import rawkin from '../../images/rawkin.png'
import jem from '../../images/jem.png'
import rusty from '../../images/rustys-hawaiian.png'
import alterEco from '../../images/alter-eco.jpg'
import maunakea from '../../images/maunakea.png'
import iggys from '../../images/iggys.png'
import lairds from '../../images/lairds.png'
import yerbaMontana from '../../images/yerbaMontana.png'
import shivelight from '../../images/shivelight.jpg'
import { HomePageWrapper, Border, colors, mq } from '../../components/styled/common'


const partners = [
  {
    image: mauiFruit,
    testimonial: {
      snippet: `They have achieved success for my business Maui Fruit Jewels`,
      text: `"It has been an honor working with Local Demo Service! They have achieved success for my business Maui Fruit Jewels especially on Oahu. Plus they helped me to get the Hawaiian Seal of Quality for my products! Local Demo Service is a great entity for representing quality local products!"`,
      attribution: `Chris Ter Horst, Founder of Maui Fruit Jewels`
    }
  },
  {
    image: ahualoa,
    testimonial: {}
  },
  {
    image: ohi,
    testimonial: {}
  },
  {
    image: rawkin,
    testimonial: {
      snippet: `I am very pleased with the work from Local Demo Service and highly recommend them`,
      text: `Local Demo Service has brought Rawkin Raw into new stores such as Hawaii's Down to Earth chain, Winterridge Foods in Idaho, Natural Grocers Durango, Huckleeberry's in the Pacific North West; plus saved our products from being dropped at multiple Natural Grocers. The Natural Grocers buyers from the Farmington New Mexico and Couer d'Alene Idaho locations had less than optimal location for my product so sales were not ideal; leading the buyers to discontinue the product. Local Demo Service jumped in and offered demos continuing Rawkin Raw at these locations plus bringing in new flavors and increasing shelf space. I am very pleased with the work from Local Demo Service and highly recommend them to other sustainable food brands!`,
      attribution: `Erinn Williams, Founder Rawkin Raw`,
    }
  },
  {
    image: iggys,
    testimonial: {
      text: 'We trust Matthew & Team with the demonstration of our products in multiple states. They are professionals at what they do and we\'re lucky to have found them. Thank you, [Local Demo Service]!',
      snippet: `We trust Matthew & Team...`,
      attribution: 'Mikail Kiva, Co-Owner and General Manager at Iggy\'s Alive & Cultured'
    }
  },
  {
    image: rusty,
    testimonial: {}
  },
  {
    image: yerbaMontana,
    testimonial: {
      text: 'Working with Matt and Local Demo Service has been a game changer for our business.  Aside from helping us double our retail locations in the span of a few months, Matthew and Local Demo Service has been an invaluable resource for information on best practices, packaging and trends in the industry.  They also do a great job of promoting our products in stores.  I would 100% recommend working with Matthew and Local Demo Service if you get a chance.',
      snippet: `Working with Matt and Local Demo Service has been a game changer for our business.`,
      attribution: 'Mackay, Owner of Yerba Montana'
    }
  },
  {
    image: maunakea,
    testimonial: {
      text: `Local Demo Service has been serving our company for the past 1.5 years performing in-store demo's, monitoring inventory and buyer relationships, plus soliciting new accounts such as Down to Earth chain Hawaii. They have been successful in boosting Mauna Kea Tea's off-island sales. When I began with Local demo service Whole Foods Kahala was discontinuing our products but through the persistence of Local Demo Service, Whole Foods Kahala brought back Mauna Kea Tea, increased sales, and received much better placement. I recommend Local Demo Service without hesitation!`,
      snippet: '...increased sales, and received much better placement',
      attribution: 'Kimberly Ino, Founder'
    }
  },
  {
    image: jem,
    testimonial: {}
  },
  {
    image: lairds,
    testimonial: {
      text: 'Working with Matthew and his team at Local Demo Service has been a superior experience. They are reliable, easy to work with and their Rock Star Brand Ambassadors product results that we are very happy with. We will continue to work with Local Demo Service as we grow our business. ',
      snippet: `...product results that we are very happy with.`,
      attribution: "Ricky V, Sales Specialist at Laird's Superfood"
    }
  },
  {
    image: alterEco,
    testimonial: {}
  },
  {
    image: shivelight,
    testimonial: {
      text: 'Matthew Kubick and his team of demonstrators have amplified our brand beyond what we could have expected. As a broker, Matthew has opened many doors for our products, and the demo support is a huge part of making our stuff appealing to buyers. Matthew and his team are conscientious, results oriented, hard working and honest. They have made our goals their own, and have done nothing less than a remarkable job of advancing them. We could not be more pleased in our partnership with Local Demo Service.',
      snippet: `...has opened many doors for our products`,
      attribution: 'Derrick, Founder of Shivelight'
    }
  }
]


const Partners = () => {
  return (
    <Border topColor={colors(.5).black} bottomColor={colors(.5).blue}>
      <BackgroundContainer>
        <HomePageWrapper>
          <Title>Partners</Title>
          <PartnersContainer>
            {partners.map(p =>
              <Partner
                image={p.image}
                testimonial={p.testimonial}
                key={p.image} />
            )}
          </PartnersContainer>
        </HomePageWrapper>
      </BackgroundContainer>
    </Border>
  );
};

const BackgroundContainer = styled.div`
  background-color: rgba(108, 200, 191, 0.50); 
`

const Title = styled.div`
  font-size: 34px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 25px;
`

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 25px;
  align-items: center;
  @media (max-width: ${mq.small}px) {
    flex-direction: column;
    flex-wrap: no-wrap;
  }
`

export default Partners;
