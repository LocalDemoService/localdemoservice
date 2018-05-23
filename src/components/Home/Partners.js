import React from 'react';
import styled from 'styled-components'
import ahualoa from '../../images/ahualoa.png'
import ohi from '../../images/ohi.png'
import mauiFruit from '../../images/mauiFruit.png'
import rawkin from '../../images/rawkin.png'
import jem from '../../images/jem.png'
import rusty from '../../images/rustys-hawaiian.png'
import alterEco from '../../images/alter-eco.jpg'
import { HomePageWrapper, Border, colors } from '../../components/styled/common'


const partners = [
  {
    image: ahualoa,
    testimonial: {
      text: `Local Demo Service has been serving our company for the past 1.5 years performing in-store demo's, monitoring inventory and buyer relationships, plus soliciting new accounts such as Down to Earth chain Hawaii. They have been successful in boosting Mauna Kea Tea's off-island sales. When I began with Local demo service Whole Foods Kahala was discontinuing our products but through the persistence of Local Demo Service, Whole Foods Kahala brought back Mauna Kea Tea, increased sales, and received much better placement. I recommend Local Demo Service without hesitation!`,
      snippet: '...increased sales, and received much better placement',
      attribution: 'Kimberly Ino, Founder'
    }
  },
  {
    image: ohi,
    testimonial: {
      text: `"Est aute minim ad tempor ipsum mollit Lorem. Aute et pariatur est nisi cillum Lorem esse."`,
      attribution: `Culpa et do irure eu`
    }
  },
  {
    image: mauiFruit,
    testimonial: {
      snippet: `They have achieved success for my business Maui Fruit Jewels`,
      text: `"It has been an honor working with Local Demo Service! They have achieved success for my business Maui Fruit Jewels especially on Oahu. Plus they helped me to get the Hawaiian Seal of Quality for my products! Local Demo Service is a great entity for representing quality local products!"`,
      attribution: `Chris Ter Horst, Founder of Maui Fruit Jewels'`
    }
  },
  {
    image: rawkin,
    testimonial: {
      text: null,
      attribution: null
    }
  },
  {
    image: jem,
    testimonial: {
      text: null,
      attribution: null
    }
  },
  {
    image: rusty,
    testimonial: {
      text: null,
      attribution: null
    }
  },
  {
    image: alterEco,
    testimonial: {
      text: null,
      attribution: null
    }
  }
]

const Partner = ({ image, testimonial }) => {
  return (
    <PartnerContainer>
      <PartnerImage>
        <img src={image} />
      </PartnerImage>
      <Testimonial>
        {testimonial.snippet && `${testimonial.snippet}...`}
      </Testimonial>
    </PartnerContainer>
  )
}

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
`

const PartnerContainer = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PartnerImage = styled.div`
  display: flex;
  height: 200px;

  img {
    width: 200px;
    align-self: center;
  }
`

const Testimonial = styled.div`
  color: #333;
  font-size: 14px;
  width: 65%;
  text-transform: italic;
`



export default Partners;