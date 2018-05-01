import React from 'react';
import styled from 'styled-components'
import ahualoa from '../../images/ahualoa.png'
import ohi from '../../images/ohi.png'
import mauiFruit from '../../images/mauiFruit.png'
import rawkin from '../../images/rawkin.png'
import jem from '../../images/jem.png'

const partners = [
  {
    image: ahualoa,
    testimonial: null
  },
  {
    image: ohi,
    testimonial: 'Occaecat commodo eiusmod aliqua id...'
  },
  {
    image: mauiFruit,
    testimonial: 'Id esse aliqua adipisicing fugiat est...'
  },
  {
    image: rawkin,
    testimonial: null
  },
  {
    image: jem,
    testimonial: null
  }
]

const Partner = ({ image, testimonial }) => {
  return (
    <PartnerContainer>
      <img src={image} greyscale />
      <Testimonial>{testimonial}</Testimonial>
    </PartnerContainer>
  )
}

const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itmes: flex-start;
`

const Partners = () => {
  return (
    <BackgroundContainer>
      <Title>Partners</Title>
      <PartnersContainer>
        {partners.map(p => <Partner image={p.image} testimonial={p.testimonial} key={p.image} />)}
      </PartnersContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  border-top: 5px solid #99ca3b;  
  background-color: rgba(108, 200, 191, 0.50); 
`

const Title = styled.div`
  font-size: 34px;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  margin-top: 25px;
`

const PartnersContainer = styled.div`
  display: inline-block;
  margin: 0 auto;
  max-width: 960px;


  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 150px;
    align-self: center;
  }
`

const Testimonial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`

export default Partners;